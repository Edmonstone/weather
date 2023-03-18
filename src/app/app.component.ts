import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;

  onLogin(email: string) {
    // Check if email is valid
    if (email.includes('@')) {
      // Authenticate user here
      this.isLoggedIn = true;
    } else {
      alert('Invalid email!');
    }
  }
}
