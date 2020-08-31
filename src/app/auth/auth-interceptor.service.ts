import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { NbAuthService } from '@nebular/auth';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(
        private authService: NbAuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.getToken().pipe(
            take(1),
            exhaustMap(token => {
                const modifiedReq = req.clone({
                    setHeaders: {
                        'Authorization': 'Bearer ' + token.getValue()
                    }
                })
                return next.handle(modifiedReq);
            })
        );
        
    }

}