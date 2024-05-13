import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
constructor(private _Authservice:AuthService , private _router:Router){}
error:string = '';
  loginForm:FormGroup = new FormGroup({

  email:new FormControl(null, [Validators.required,Validators.email]),
  password:new FormControl(null, [Validators.required,Validators.pattern("P@ssw0rd"),]),
});
submitLogin(formInfo:FormGroup){
  this._Authservice.login(formInfo.value).subscribe((response) => {
    if (response.message == 'success'){
      localStorage.setItem('userToken',JSON.stringify(response.token))
      this._Authservice.setUserData();
      this._router.navigate(['/home'])
    }
    else{
      this.error = 'Email or password are wrong';
    }
  });

}
}   