import { Toast, ToastType } from './../models/toast.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private subject = new Subject<Toast>();
  private defaultId = 'default-alert';

  // enable subscribing to alerts observable
  onToast(id = this.defaultId): Observable<Toast> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  // main toast method
  toast(toast: Toast) {
    toast.id = toast.id || this.defaultId;
    this.subject.next(toast);
  }

  // clear toast
  clear(id = this.defaultId) {
    this.subject.next(new Toast({ id }));
  }

  // convenience methods
  success(message: string, options?: any) {
    return this.toast(
      new Toast({ ...options, type: ToastType.Success, message })
    );
  }

  error(message: string, options?: any) {
    return this.toast(
      new Toast({ ...options, type: ToastType.Error, message })
    );
  }

  information(message: string, options?: any) {
    return this.toast(new Toast({ ...options, type: ToastType.Info, message }));
  }

  warning(message: string, options?: any) {
    return this.toast(
      new Toast({ ...options, type: ToastType.Warning, message })
    );
  }
}
