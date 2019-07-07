import { Component, OnInit } from '@angular/core';
import { Upgrade } from '../upgrade'

@Component({
  selector: 'app-upgrade-bar',
  templateUrl: './upgrade-bar.component.html',
  styleUrls: ['./upgrade-bar.component.scss']
})
export class UpgradeBarComponent implements OnInit {

  availableUpgrades : Array<Upgrade>

    constructor() {
        
    }

    ngOnInit() {
        this.availableUpgrades = [
            new Upgrade("New Mouse", 10),
            new Upgrade("New Computer", 20),
        ]

    }

}
