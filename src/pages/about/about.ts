import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, af: AngularFire) {

      this.items = af.database.list('/items');
  }

    itemSelected(valor) {
      alert(valor);
    }

}
