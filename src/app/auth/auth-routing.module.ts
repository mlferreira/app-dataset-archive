import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '', component: AuthBlockComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'logout', component: LogoutComponent},
            {path: 'register', component: RegisterComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
