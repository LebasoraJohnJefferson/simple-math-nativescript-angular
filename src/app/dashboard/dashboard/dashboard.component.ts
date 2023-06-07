import { Component } from '@angular/core';
import { Page } from '@nativescript/core';
import { IncreaseScoreService } from '../../services/increase-score.service'

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  score:number = 0
  operators:string[] = ['addition','subtraction','multiplication','division']

  constructor(
    private page: Page,
    private _increaseScore:IncreaseScoreService
  ){
    this.page.actionBarHidden = true;
    this._increaseScore.increaseScore$.subscribe(()=>{
      this.score+=1
    })
  }

  selectedOperator(operator:string){
    alert(operator)
  }
}
