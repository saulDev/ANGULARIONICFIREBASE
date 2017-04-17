import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    options: any;

  constructor(public navCtrl: NavController) {
      this.options = {
          title : { text : 'simple chart' },
          series: [{
              data: [29.9, 71.5, 106.4, 129.2],
          }]
      };
  }

}
