import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Contributor } from 'src/app/pages/shared/contributor/contributor.model';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      username: '',
      password: ''
    });
  }

  submitForm() {
    let contributor: Contributor = new Contributor();

    contributor.email = this.form.get('email').value;
    contributor.username = this.form.get('username').value;
    contributor.password = this.form.get('password').value;

    this.registerService.postRegister(contributor).subscribe(
      (res) => {
        this.router.navigate(['auth/login'])
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
