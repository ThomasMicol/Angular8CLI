import { Component, ViewChild } from '@angular/core';
import { ClickerComponent } from './Clicker.Component/clicker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'clickster';

  flatClick : number = 1;
    clickMult : number = 2;

  Upgrade($event){

  }
}
