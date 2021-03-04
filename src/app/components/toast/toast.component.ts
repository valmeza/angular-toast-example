import { Toast, ToastType } from './../../models/toast.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  toasts: Toast[] = [];
  toastSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(private toastService: ToastService, private router: Router) {}

  ngOnInit(): void {
    // subscribe to new toast notifications
    this.toastSubscription = this.toastService
      .onToast(this.id)
      .subscribe((toast) => {
        // clear toast when an empty alert is received
        if (!toast.message) {
          // filter out toast without 'keepAfterRouteChange' flag
          this.toasts = this.toasts.filter((x) => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          this.toasts.forEach((x) => delete x.keepAfterRouteChange);
          return;
        }

        // add toast to array
        this.toasts.push(toast);

        //auto close toast if required
        if (toast.autoClose) {
          setTimeout(() => this.removeToast(toast), 3000);
        }
      });

    // clear toast on location change
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.toastService.clear(this.id);
      }
    });
  }

  ngOnDestroy(): void {
    // unsubscribe to avoid memory leaks
    this.toastSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeToast(toast: Toast) {
    // check if already removed to prevent error on auto close
    if (!this.toasts.includes(toast)) return;

    if (this.fade) {
      //fade out toast
      this.toasts.find(x => x === toast).fade = true;

      //remove toast after faded out
      setTimeout(() => {
        this.toasts = this.toasts.filter(x => x !== toast);
      }, 250);
    } else {
      //remove alert
      this.toasts = this.toasts.filter(x => x !== toast);
    }
  }

  cssClass(toast: Toast) {
    if (!toast) return;

    const classes = ['alert', 'alert-dismissable'];

    const toastTypeClass = {
      [ToastType.Success]: 'alert-success',
      [ToastType.Error]: 'alert-danger',
      [ToastType.Info]: 'alert-info',
      [ToastType.Warning]: 'alert-warning',
    };

    classes.push(toastTypeClass[toast.type]);

    if (toast.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }
}
