import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaintTheTownRedPage } from './paint-the-town-red';

@NgModule({
  declarations: [
    PaintTheTownRedPage,
  ],
  imports: [
    IonicPageModule.forChild(PaintTheTownRedPage),
  ],
})
export class PaintTheTownRedPageModule {}
