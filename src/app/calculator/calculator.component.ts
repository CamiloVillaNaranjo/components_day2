import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  display:string = "0";

  constructor() { }

  ngOnInit() { 

  }

  //triggered when user clicks on number Button or operational button.
  Focked(value:any){
    debugger;
    this.display +=value;
  }

  //triggered when user clicks on Equals Button.
  evalExpression(){
    debugger;
    try{
      this.display = eval(this.display);
    }catch(e){
      this.display = "Error";
    }
  }
  //triggered when user clicks on Clear Button.
  clearExpression(){
    debugger;
    this.display = "";
  }
}
