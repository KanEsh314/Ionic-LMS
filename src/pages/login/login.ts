import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { ForgotPage } from '../forgot/forgot';
import { AuthProvider } from '../../providers/auth/auth';

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
  loading: any;
  loginData = { email:'', password:'' };
  data: any;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public loadingCtrl: LoadingController, public navParams: NavParams, public modalCtrl: ModalController, private toastCtrl: ToastController) {
    this.pageElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    },4000);
  }

  //login
  getAuth(){
    this.showLoader();
    console.log(this.loginData)
    this.authProvider.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      console.log(this.data)
      window.localStorage.setItem('token', this.data.token);
      //this.navCtrl.push(TabsPage);
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });  	
  }

  getRegister(){
    //this.modalCtrl.create(RegisterPage).present();
    this.navCtrl.push(RegisterPage);
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed Toast');
    });
    toast.present();
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
