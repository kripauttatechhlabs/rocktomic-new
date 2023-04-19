import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
//import { AuthService } from 'app/shared/auth/auth.service';
//import { NgxSpinnerService } from 'ngx-spinner';
//import { ToastrService } from 'ngx-toastr';
//import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormSubmitted = false;
  isLoginFailed = false;
  loader: boolean = false;
  showPassword: boolean = false;

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required]),
    showPassword: new UntypedFormControl(false)
  });


  constructor(private router: Router,
   private authService: AuthService,
   // private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    //private toastr: ToastrService,
    //@Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
    
  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loader = true;
    //this.spinner.show();
    this.authService.login(this.loginForm.value).subscribe(
      (resp) => {
        if (resp.Status) {
          console.warn(resp);
          //this.toastr.success('Loggedin Successfully!', 'Success!');
         // this.router.navigate(['/vendors']);
          localStorage.setItem('accessToken', resp?.access_token);
          localStorage.setItem('refressToken', resp?.refresh_token);
          localStorage.setItem('refressToken', resp?.refresh_token);
          localStorage.setItem('token_type', resp?.token_type);
          localStorage.setItem('expires_in', resp?.expires_in);
          this.getUserDetails();
        } else {
          this.loader = false;
          //this.toastr.error('Invalid email Id or password!', 'Error!');
        }
      }
    );
  }

  getUserDetails(){
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loader = true;
    //this.spinner.show();
    this.authService.getUserDetails().subscribe(
      (resp) => {
        if (resp.Status) {
          //this.toastr.success('Loggedin Successfully!', 'Success!');
         // this.router.navigate(['/vendors']);
          localStorage.setItem('userDetails', JSON.stringify(resp?.Data));
          if(resp?.Data?.userGroup?.name.toLowerCase() == 'customer'){
            this.router.navigate(['customer/introduction']);
          }else{
            this.router.navigate(['admin/dashboard']);
          }
        } else {
        //  this.loader = false;
          //this.toastr.error('Invalid email Id or password!', 'Error!');
        }
      }
    );

  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
