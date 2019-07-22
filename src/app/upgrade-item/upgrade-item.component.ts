import { Component, OnInit, Input } from '@angular/core';
import { UpgradeModel } from '../upgrade-model';

@Component({
  selector: 'app-upgrade-item',
  templateUrl: './upgrade-item.component.html',
  styleUrls: ['./upgrade-item.component.scss']
})
export class UpgradeItemComponent implements OnInit {

  @Input() upgrade : UpgradeModel
  
  constructor() { }

  Purchase(upgrade : UpgradeModel)
  {
    console.info([upgrade])
  }

  ngOnInit() {
  }

}