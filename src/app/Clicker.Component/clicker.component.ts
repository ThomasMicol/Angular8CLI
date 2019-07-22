import { Component, Input } from '@angular/core';

@Component({
  selector: 'clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
    @Input() flatClick : number;
    @Input() clickMult : number;

    title : string  = 'clickster';
    money : number = 0;

    Click(){
        console.log(this.money);
        this.money = this.money + (this.flatClick * this.clickMult);
    }

    onPurchaseEvent(){
      console.log("how");
    }
  
}
