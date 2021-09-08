import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getTime() {
    return timer(0, 1000).pipe(
      map(() => new Date()),
      share()
    )  
  }
}
