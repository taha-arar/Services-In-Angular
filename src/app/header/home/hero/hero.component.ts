import { Component } from '@angular/core';
import { SubscruptionService } from 'src/app/Services/subscruption.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  //providers: [SubscruptionService]
})
export class HeroComponent {


  constructor(private subscribeService : SubscruptionService){
  }

  onSubscribe(){
    this.subscribeService.onSubscribeClicked('Youcef');
    }


}
