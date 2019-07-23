import { Component, ViewChild } from '@angular/core';
import { ClickerComponent } from './Clicker.Component/clicker.component';
import { EffectTargetEnum } from './effect-target-enum.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'clickster';

  flatClick : number = 1;
  clickMult : number = 1;
  money : number = 0;

  handleMoneyChange($event){
    this.money = $event[0];
  }

  Upgrade($event){
    $event.forEach(upgrade => {
      if(this.money >= upgrade.Cost){
        this.money -= upgrade.Cost;
      }else{
        return;
      }
      if(upgrade.EffectTarget === EffectTargetEnum.ClickGainMultiplier){
        this.clickMult += upgrade.EffectNumber;
      }
      if(upgrade.EffectTarget === EffectTargetEnum.FlatClickGain){
        this.flatClick += upgrade.EffectNumber;
      }
    });
  }
}
