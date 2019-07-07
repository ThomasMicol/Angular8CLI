import { Component } from '@angular/core';

@Component({
  selector: 'clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
    title : string  = 'clickster';
    money : number = 0;

    Click(){
        console.log(this.money);
        this.money = this.money + 1;
    }
  
}
