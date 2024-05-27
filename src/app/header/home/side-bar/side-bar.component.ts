import { Component } from '@angular/core';
import { SubscruptionService } from 'src/app/Services/subscruption.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {


  constructor(private subscribeService : SubscruptionService){
  }
 
  onSubscribe(){
    this.subscribeService.onSubscribeClicked('Arar');
    }

  }

