import { Component } from '@angular/core';

@Component({
  selector: 'clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
    title : string  = 'clickster';
    flatCLick : number = 1;
    clickMult : number = 1;
    money : number = 0;

    Click(){
        console.log(this.money);
        this.money = this.money + 1;
    }

    onPurchaseEvent(){
      console.log("how");
    }
  
}
