import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
constructor(private _Authservice:AuthService , private _router:Router){}
error:string = '';
  registerForm:FormGroup = new FormGroup({
  first_name:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  last_name:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  age:new FormControl(null, [Validators.required,Validators.min(16),Validators.max(80)]),
  email:new FormControl(null, [Validators.required,Validators.email]),
  password:new FormControl(null, [Validators.required,Validators.pattern("P@ssw0rd"),]),
});
submitRegister(formInfo:FormGroup){
  this._Authservice.register(formInfo.value).subscribe((response) => {
    if (response.message == 'success'){
this._router.navigate(['/login'])
    }
    else{
      this.error = 'Email is already registered';
    }
  });

}
}   