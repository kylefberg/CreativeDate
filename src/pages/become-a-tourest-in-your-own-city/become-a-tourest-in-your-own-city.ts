import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BecomeATourestInYourOwnCityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-become-a-tourest-in-your-own-city',
  templateUrl: 'become-a-tourest-in-your-own-city.html',
})
export class BecomeATourestInYourOwnCityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BecomeATourestInYourOwnCityPage');
  }

}
