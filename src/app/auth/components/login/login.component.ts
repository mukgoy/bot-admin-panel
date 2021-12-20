import { Component, OnInit } from '@angular/core';
import { javaHost, javaApis } from '@shared/configs';
import { ApiHttpService } from '@shared/services/api-http.service';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: SocialUser = <SocialUser>{};
  
  constructor(
    private authService: SocialAuthService,
    private http: ApiHttpService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.signIn(user)
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  signIn(user:any){
    let userdata:any = {
      name: user.name,
      userEmailColl: [{email : user.email}],
      userType: "recruiter",
      orgId: 0,
      userPortalAcctColl: [{
        portalUrl: "https://plus.google.com/u/0/" + user.id,
        portalUserId: user.id,
        emailAddress: user.email,
        portalName: "google",
        screenName: "googleLogin",
        accessToken: user.response,
        profileData: user
      }]
    }

    let url = javaHost + javaApis.auth.addUpdateUser
    this.http.post(url, userdata).subscribe();
  }

}
