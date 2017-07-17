import { Component } from '@angular/core';
import { Http } from "@angular/http";
import * as Oidc from 'oidc-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _http: Http
  ) {
    
  }
  

  login() {
    var config = {
      authority: "http://localhost:5000",
      client_id: "js",
      redirect_uri: "http://localhost:4200",
      response_type: "id_token token",
      scope:"openid profile api1",
      post_logout_redirect_uri : "http://localhost:4200",
    };
    let mgr = new Oidc.UserManager(config);
    console.log(Oidc);
    mgr.signinRedirect();
    //this._http.
  }
}
