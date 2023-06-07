import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class IncreaseScoreService {
  private _increaseScore =new Subject<any>()

  increaseScore$ = this._increaseScore.asObservable()

  constructor() { }

  emitScore(){
    this._increaseScore.next(null)
  }

}
