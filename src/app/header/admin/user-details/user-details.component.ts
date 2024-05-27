import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/Models/user';
import { LoggerService } from 'src/app/Services/logger.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(
    private userService : UserService){}


    users = this.userService.getAllUsers()
    selectedUser!: User;

    ngOnInit(){
      this.userService.getUserDetailsClicked.subscribe((data => {
        if(data.gender === 'Male') this.src = 'assets/male.png';
        else this.src = 'assets/female.png';
        this.selectedUser = data;
      }));
    }

    src : string = 'assets/user-avatar.png';


    showPopup(user : User){
      this.userService.getUserDetails(user);
    }

   






}
