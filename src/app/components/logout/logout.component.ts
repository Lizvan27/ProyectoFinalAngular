import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  constructor(
    private userService:UserService,
    private router: Router){}
  
  logout(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error))
  }
}
