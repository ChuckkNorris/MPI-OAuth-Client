import { Router } from '@angular/router';
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
    private _userService: UserService,
    private _router: Router
  ) { 
    this.userManager = this._userService.getUserManager();
    this._router.events.subscribe(() => this.checkUserStatus());
  }
  userManager: Oidc.UserManager;
  isLoggedIn: boolean = false;
  ngOnInit() {
    
  }

  checkUserStatus() {
     this.userManager.getUser().then(user => {
      if (user)
        this.isLoggedIn = true;
      else
        this.isLoggedIn = false;
    })
  }

  ngOnChanges() {
    console.log('App ngOnChanges()');
  }

  routerOnActivate() {
    console.log('App routerOnActivate()');
  }

  login() {
    this.userManager.signinRedirect();
  }

  signOut() {
    this.userManager.signoutRedirect();
  }
}
