import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

const data = [{
  title: 'Ahoy Matey',
  body: 'Start your adventure',
  id: 0
},{
  title: 'Become a tourest in your own city',
  body: 'Start your adventure',
  id: 1
},{
  title: 'Choptops and Greasers',
  body: 'Start your adventure',
  id: 2
},]

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dates: any
  constructor(public navCtrl: NavController) {
    this.dates = data;
  }

}
