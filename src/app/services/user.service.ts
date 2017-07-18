import { Injectable } from "@angular/core";
import * as Oidc from 'oidc-client';

@Injectable()
export class UserService {
    public authorityUrl: string = "https://authtest.mpiweb.org";
    getUserManager() {
        let config = {
            authority: this.authorityUrl,
            client_id: "MpiJavaScriptClient",
            redirect_uri: "http://localhost:4200/user",
            response_type: "id_token token",
            scope:"openid profile email pictureurl employee api1",
            post_logout_redirect_uri : "http://localhost:4200",
        };
        return new Oidc.UserManager(config);
    }

    
}