import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: NbAuthService
  ) { }

  ngOnInit(): void {
    this.authService.logout('username').subscribe(
      (result) => {
        console.log(result)
      }
    );
  }

}
