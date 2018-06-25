import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { ForgotPage } from '../forgot/forgot';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  pageElement: any;
  splash = true;

  public type = "password";
  public showPass = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.pageElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    },4000);
  }

  getAuth(){
  	this.navCtrl.push(TabsPage);
  }

  getRegister(){
    this.modalCtrl.create(RegisterPage).present();
  }

  getForgot(){
    this.modalCtrl.create(ForgotPage).present();
  }

  showPassword(){
    this.showPass = !this.showPass;
  if (this.showPass) {
    this.type = "text";
  }else {
    this.type = "password";
    }
  }

}
