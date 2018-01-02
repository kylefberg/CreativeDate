import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakeasyPage } from './speakeasy';

@NgModule({
  declarations: [
    SpeakeasyPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakeasyPage),
  ],
})
export class SpeakeasyPageModule {}
