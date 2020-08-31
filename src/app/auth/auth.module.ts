import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbAuthModule} from '@nebular/auth';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { 
  NbAlertModule, 
  NbInputModule, 
  NbButtonModule, 
  NbCheckboxModule, 
  NbIconModule,
  NbCardModule
} from '@nebular/theme';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAlertModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbAuthModule,
    NbCardModule
  ],
  declarations: [
    LoginComponent,
    AuthBlockComponent,
    LogoutComponent,
    RegisterComponent,
  ],
  providers: [
    RegisterService
  ]
})
export class NgxAuthModule {
}