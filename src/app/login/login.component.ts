import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';

  @Output() login = new EventEmitter<string>();

  onSubmit() {
    this.login.emit(this.email);
  }
}
