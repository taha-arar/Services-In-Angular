import { EventEmitter, Injectable, inject } from '@angular/core';
import { User } from '../Models/user';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [
    new User("Alice", "Female", "Monthly", "Active"),
    new User("Bob", "Male", "Yearly", "Inactive"),
    new User("Charlie", "Male", "Monthly", "Active"),
    new User("Diana", "Female", "Yearly", "Active"),
    new User("Eve", "Female", "Monthly", "Inactive")
  ];

  constructor(private loggerService : LoggerService) {}

  //loggerService = inject(LoggerService);

  

  getAllUsers(){
    return this.users;
  }

  createNewUser(name : string, gender : string, subType : string, status : string){
    let user = new User(name, gender, subType, status);
    this.users.push(user);
    this.loggerService.logMessage(name,status);
  }

  getUserDetailsClicked : EventEmitter<User> = new EventEmitter<User>();

  getUserDetails(user : User){
    this.getUserDetailsClicked.emit(user);
  }
}
