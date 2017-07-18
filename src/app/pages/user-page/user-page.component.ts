import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as Oidc from 'oidc-client';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    let mgr = new Oidc.UserManager(undefined).signinRedirectCallback().then(() => {
      this.router.navigate(['']);
    });
  }

}
