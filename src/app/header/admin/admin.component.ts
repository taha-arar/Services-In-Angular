import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private userService : UserService){}

  username : string = '';
  gender : string = 'Male';
  subType : string = 'Yearly';
  status : string = 'Active';






saveUser(){
this.userService.createNewUser(this.username,this.gender,this.subType,this.status);
}



}
