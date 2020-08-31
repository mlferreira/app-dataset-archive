import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isAuthenticated;

  user = {
    sub: ''
  };

  constructor(
    private sidebarService: NbSidebarService,
    private authService: NbAuthService) {

      this.authService.onTokenChange().subscribe(
          (token: NbAuthJWTToken) => {
            if (token.isValid()) {
              this.user = token.getPayload();
            }
          });

  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.onAuthenticationChange();

  }

  toggle() {
    this.sidebarService.toggle(true, "left");
  }


}
