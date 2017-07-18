import { Http, Headers } from '@angular/http';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as Oidc from 'oidc-client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private _http: Http,
    private _userService: UserService) { }

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
           this.getProfileDetails(user.access_token, user.profile.person_id);
        }
        else
          this.message = "User not logged in";
      });
    }

    fullProfile = {};
    getProfileDetails(accessToken, personId) {
      console.log('Getting PRofile Data: ' + accessToken);
      let headers: Headers = new Headers();
      headers.append('Authorization', 'Bearer ' + accessToken);
      this._http.get(this._userService.authorityUrl + '/ProfileDetails/GetUserProfile?personId=' + personId, { headers: headers})
        .subscribe(response => {
          this.fullProfile = response.json();
        });
    }

}
