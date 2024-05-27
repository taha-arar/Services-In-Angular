import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscruptionService {

  constructor() { }

  onSubscribeClicked(name : string){
    alert('Thank you '+name+' for your subscreption..');
  } 
}
