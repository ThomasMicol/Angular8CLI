import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Upgrade } from '../upgrade';
import { EffectTargetEnum } from '../effect-target-enum.enum';

@Component({
  selector: 'app-upgrade-bar',
  templateUrl: './upgrade-bar.component.html',
  styleUrls: ['./upgrade-bar.component.scss']
})
export class UpgradeBarComponent implements OnInit {

  @Output() onPurchase: EventEmitter<any> = new EventEmitter();

  availableUpgrades : Array<Upgrade>


    constructor() {
        
    }

    onPurchaseEvent($event){
      console.log([$event]);
      this.onPurchase.emit($event);
    }

    ngOnInit() {
        this.availableUpgrades = [
            new Upgrade("New Mouse", 10, EffectTargetEnum.FlatClickGain, 10),
            new Upgrade("New Computer", 20, EffectTargetEnum.ClickGainMultiplier, 2),
        ]

    }

}
