import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickerComponent} from './Clicker.Component/clicker.component';
import { UpgradeBarComponent } from './upgrade-bar/upgrade-bar.component';
import { UpgradeItemComponent } from './upgrade-item/upgrade-item.component'

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    UpgradeBarComponent,
    UpgradeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
