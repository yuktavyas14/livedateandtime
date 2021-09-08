import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ServiceService } from './service.service';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any="PracticalTask";
  rxTime = new Date();
  subscription: Subscription = new Subscription;
constructor(private tm:ServiceService){

}
  ngOnInit() {
    this.subscription = this.tm.getTime()
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
