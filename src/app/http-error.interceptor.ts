import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
//import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private _router: Router,
    //private toastr: ToastrService,
  ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
       // retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage: any = [];

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            if(error.status === 401){
              //this.toastr.error('Please Login! Session has expired', 'Error!');
              this._router.navigate(['/unsigned/login']);
            }

            if(Array.isArray(error.error.errors)){
              errorMessage = error.error.errors;
              for(let index in errorMessage){
                //this.toastr.error(errorMessage[index] || 'Something went wrong.', 'Error!');
              }
            }
            else{
              errorMessage = error.error.message;
             // this.toastr.error(errorMessage || 'Something went wrong.', 'Error!');
            }

            //Swal.fire('Error', errorMessage || 'Something went wrong.', 'error');
          }
          //window.alert(errorMessage);
          return throwError(errorMessage);
        })
      )
  }
}
