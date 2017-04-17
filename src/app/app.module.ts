import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ChartModule } from 'angular2-highcharts';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
declare var require: any;
export const firebaseConfig = {
    apiKey: "AIzaSyDdU7lzNpkHiu5kfB7CNZccHi0IPO4FVRE",
    authDomain: "pase-de-lista-pa.firebaseapp.com",
    databaseURL: "https://pase-de-lista-pa.firebaseio.com",
    projectId: "pase-de-lista-pa",
    storageBucket: "pase-de-lista-pa.appspot.com",
    messagingSenderId: "95332696201"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      ChartModule.forRoot(require('highcharts')),
      AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
