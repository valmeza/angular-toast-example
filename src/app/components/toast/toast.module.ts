import { ToastComponent } from './toast.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  exports: [ToastComponent],
})
export class ToastModule {}
