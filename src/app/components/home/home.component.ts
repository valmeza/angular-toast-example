import { ToastService } from 'src/app/services/toast.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  options = {
    autoClose: false,
    keepAfterRouteChange: false
  }


  constructor(public toastService: ToastService) { }
}
