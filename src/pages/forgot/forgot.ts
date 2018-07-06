import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  email: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public viewCtrl: ViewController, public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    
  }

  getReset(){
    this.authProvider.reset(this.email).then(() => {
      this.navCtrl.push(LoginPage);
    }).catch(e => {
      console.log('Error: ' + e.message);
    });
  	// this.toastCtrl.create({
  	// 	message: "Check Your Email...",
  	// 	duration: 5000
  	// }).present();
    // this.viewCtrl.dismiss();
  }

  getCancel(){
  	this.viewCtrl.dismiss();
  }

}
