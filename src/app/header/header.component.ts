import { Component } from '@angular/core';
import { SubscruptionService } from '../Services/subscruption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(
    private subscribeService : SubscruptionService,
    private router: Router){}


  homeClicked(){
    this.router.navigate(['/home']);
  }

  adminClicked(){
    this.router.navigate(['/admin']);
  }

  onSubscribe(){
    this.subscribeService.onSubscribeClicked('Taha');
    }

}
