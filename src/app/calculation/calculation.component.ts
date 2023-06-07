import { Component,Input  } from '@angular/core';
import { ActivatedRoute  } from '@angular/router'
import {Location} from '@angular/common'

@Component({
  selector: 'ns-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent{
  operation:string = ''
  numberOne:number = 0
  numberTwo:number = 0
  sign:string='addition'
  operatorSign = {
    'addition':'+',
    'subtraction':'-',
    'multiplication':'x',
    'division':'÷'
  }

  constructor(
    private _routes:ActivatedRoute,
    public location:Location,
    ){
    this.operation = this._routes.snapshot.paramMap.get('operator')
    this.sign = this.operatorSign[this.operation]
    this.generateTwoRandomNumber()
  }


  generateTwoRandomNumber(){
    this.numberTwo = Math.floor(Math.random()*50)
    this.numberOne = this.numberTwo + Math.floor(Math.random()*50)
  }

  getAnswer(args:any) { 
    let textField = args.object;
    let correctAnswer:number = 0
    let newValue = textField.text;
    if(newValue=='' || newValue == null) return

    if(this.operation == 'addition') correctAnswer = this.numberOne + this.numberTwo
    else if(this.operation == 'subtraction') correctAnswer = this.numberOne - this.numberTwo
    else if(this.operation == 'multiplication') correctAnswer = this.numberOne * this.numberTwo
    else{
      this.numberTwo = this.numberTwo != 0 ? this.numberTwo : 1
      correctAnswer = Number((this.numberOne / this.numberTwo).toFixed(2))
    }

    console.log(this.operation)

    if(newValue == correctAnswer){
      alert('Correct!')
      textField.text = ''
      this.generateTwoRandomNumber()
    }


  }

  goBack() {
    this.location.back()
  }

openSettings() {
    // implement the cusotm logic
}


}
