import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DatePage } from '../date/date';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DatePage;


  constructor() {

  }
}
