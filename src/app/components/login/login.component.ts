import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
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
