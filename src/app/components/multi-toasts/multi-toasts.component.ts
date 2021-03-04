import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './multi-toasts.component.html',
})
export class MultiToastsComponent {
  constructor(public toastService: ToastService) {}
}
