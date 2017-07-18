import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as Oidc from 'oidc-client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userManager = this._userService.getUserManager();
    this.getUserInfo();
  }
   userManager: Oidc.UserManager = new Oidc.UserManager(undefined);
     
   message: string = "";
    userDetails: any;
    getUserInfo() {
      this.userManager.getUser().then(user => {
        if (user) {
          this.userDetails = user.profile
          this.message = "User Logged In";
        }
        else
          this.message = "User not logged in";
      });
    }

}
