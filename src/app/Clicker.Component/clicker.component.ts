import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
    @Input() flatClick : number;
    @Input() clickMult : number;
    @Input() money : number;
    @Output() moneyAdded : EventEmitter<any> = new EventEmitter();
    
    title : string  = 'clickster';

    Click(){
        console.log(this.money);
        this.money = this.money + (this.flatClick * this.clickMult);
        this.moneyAdded.emit([this.money]);
    }
  
}
