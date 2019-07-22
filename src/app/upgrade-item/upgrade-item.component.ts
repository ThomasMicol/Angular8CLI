import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeModel } from '../upgrade-model';

@Component({
  selector: 'app-upgrade-item',
  templateUrl: './upgrade-item.component.html',
  styleUrls: ['./upgrade-item.component.scss']
})
export class UpgradeItemComponent implements OnInit {

  @Input() upgrade : UpgradeModel
  @Output() onPurchase: EventEmitter<any> = new EventEmitter();

  
  constructor() { }

  PurchaseWasClicked(upgrade : UpgradeModel)
  {
    console.info([upgrade]);
    this.onPurchase.emit([upgrade]);
  }

  ngOnInit() {
  }

}