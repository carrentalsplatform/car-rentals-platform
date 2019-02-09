import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental';
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor() {}
  getErrorMessage() {
    return this.email.hasError('required') ? 'Musisz podać email' :
        this.email.hasError('email') ? 'Email nie jest prawidłowy' :
            '';
  }
}

