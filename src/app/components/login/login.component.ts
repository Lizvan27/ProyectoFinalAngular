import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin!: FormGroup;

  constructor(
    private userService:UserService,
    private router:Router
  ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
    
  }

  Guar(){
    this.userService.login(this.formLogin.value)
    .then( response => {
      console.log(response)
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error))
  }
}
