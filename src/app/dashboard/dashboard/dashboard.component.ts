import { Component } from '@angular/core';
import { Page } from '@nativescript/core';


@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  score:number = 0
  operators:string[] = ['addition','subtraction','multiplication','division']

  constructor(
    private page: Page
  ){
    this.page.actionBarHidden = true;
  }

  selectedOperator(operator:string){
    alert(operator)
  }
}
