import { Injectable } from "@angular/core";
import * as Oidc from 'oidc-client';

@Injectable()
export class UserService {
    getUserManager() {
        let config = {
            authority: "http://localhost:5000",
            client_id: "js",
            redirect_uri: "http://localhost:4200/user",
            response_type: "id_token token",
            scope:"openid profile email pictureurl employee api1",
            post_logout_redirect_uri : "http://localhost:4200",
        };
        return new Oidc.UserManager(config);
    }
}