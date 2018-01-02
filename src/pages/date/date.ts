import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AhoyMateyPage } from '../ahoy-matey/ahoy-matey';

// this is where you add routes for linking to other pages
/**
 * Generated class for the DatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

class Date {
  title: string
  body: string
  id: string

  constructor (){}
}

@Component({
  selector: 'page-date',
  templateUrl: 'date.html',
})
export class DatePage {
  date: Date = new Date()
  constructor(public navCtrl: NavController) {}
  nextPage(){
    this.navCtrl.push(AhoyMateyPage);
  }

  submit() {
    this.navCtrl.parent.select(0)
  }

}
