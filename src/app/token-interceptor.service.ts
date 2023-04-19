import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: any, next: any){
    let tokeniuzeRequest = req.clone({
      setHeaders: {
        Authorization: `${localStorage.getItem('token_type')} ${localStorage.getItem('accessToken')}`
      }
    });

    return next.handle(tokeniuzeRequest);
  }
}
