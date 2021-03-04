import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastComponent } from './components/toast/toast.component';
import { HomeComponent } from './components/home/home.component';
import { MultiToastsComponent } from './components/multi-toasts/multi-toasts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    HomeComponent,
    MultiToastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
