import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contributor } from 'src/app/pages/shared/contributor/contributor.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService implements OnInit {

    private registerApi = environment.localAPi + 'api/user';


    constructor(
        private http: HttpClient
    ) { }

    ngOnInit(): void {
    }

    postRegister(contributor: Contributor) {
        return this.http.post<Contributor>(this.registerApi + '/signup', contributor);
    }


}