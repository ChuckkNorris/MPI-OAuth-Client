import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { Http } from "@angular/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _userService: UserService
  ) { }
  userManager: Oidc.UserManager;
  ngOnInit() {
    this.userManager = this._userService.getUserManager();
  }

  login() {
    this.userManager.signinRedirect();
  }

  signOut() {
    this.userManager.signoutRedirect();
  }
}
