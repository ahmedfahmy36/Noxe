import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
islogin:boolean = false;

constructor(private _AuthService:AuthService){}

ngOnIt():void{
}
}
