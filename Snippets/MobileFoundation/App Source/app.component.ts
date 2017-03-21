import { Component, Renderer } from '@angular/core';
import { Platform, AlertController, App } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private rootPage: any;
  private AuthHandler: any;
  private nav: any;

  constructor(platform: Platform, public renderer: Renderer, private app: App, public alertCtrl: AlertController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    renderer.listenGlobal('document', 'mfpjsloaded', () => {
      console.log('--> mfpjsloaded has fired');

      this.rootPage = TabsPage;
      this.nav = this.app.getActiveNav();
      this.nav.setRoot( this.rootPage );

      this.AuthInit();

    })

  }

  AuthInit() {
    console.log('--> In AuthInit()');

    this.AuthHandler = WL.Client.createSecurityCheckChallengeHandler("UserLogin");
    this.AuthHandler.handleChallenge = ((response) => {
      console.log('--> in handleChallenge()');
      this.DisplayLogin();
    });
  }

  DisplayLogin() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter your username and password",
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Login',
          handler: data => {
            console.log('---> Trying to auth with user', data);
            this.AuthHandler.submitChallengeAnswer(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
