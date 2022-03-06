import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // calc:any = document.querySelector('input[name="calc"]');
  calculate:any = "";
  calculateAux:any = "";
  n2:any = "";
  n3:any = "";
  result:any = "";

  constructor() {}
  
  calculator(val){
    this.operation(val)
    
    setTimeout(() => {
      if(val != '='){
        this.n3 = this.calculate;
        console.log("this.calculate1",this.calculate);
      }else{
        this.n2 = this.n3;
        this.n3 = this.result;
        this.calculate = this.result;
        console.log("this.calculate2",this.calculate);
      }
    }, 1000);
  }

  operation(val){
    let value = "";
    (val == 'x')? value = '*' : value = val;
    if(value == 'reset'){
      this.calculate = '';
    }
    else if(value == '='){
      this.result = eval(this.calculate);
    }else{
      this.calculate += value;
    };
  }

}
