import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public walkinId: BehaviorSubject<any> = new BehaviorSubject(0);
  constructor() { }
}
