import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the TextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text',
  templateUrl: 'text.html',
})
export class TextPage {

  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    
  }

  back(){
  	this.viewCtrl.dismiss();
  }

  getMessage(){
  	this.toastCtrl.create({
  		message: "Your Message Has Been Sent...",
  		duration: 5000
  	}).present();
  }
}
