import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController , AlertController, Loading} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpProvider } from '../../providers/http/http';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  usersreg : any;

  first_name = '';
  last_name = '';
  password = '';
  email = '';
  country_id = '';

  public loading : Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public authServices: AuthProvider, public httpServices: HttpProvider, public alertCtrl: AlertController) {
  
  }

  ionViewDidLoad() {
    this.httpServices.getCountry().subscribe((data) => {
      this.usersreg = data;
      console.log(this.usersreg);
    }, (err) => {
      console.log(err);
    });
  }

  cancelRegister(){
    this.navCtrl.pop();
  }

  postregistered(){

    let details = {
      first_name : this.first_name,
      last_name : this.last_name,
      password : this.password,
      email : this.email,
      country_id : this.country_id
    };

    this.authServices.createAccount(details).then((result) => {
        console.log(result);
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot(LoginPage);
        });
    }, (err) => {
        this.loading.dismiss().then(() => {
          this.alertCtrl.create({
           title: 'Registration Failed',
            subTitle: 'Please Try Again!',
            buttons: ['OK']
            }).present();
        });
        console.log(err);
    });

    console.log(details);

    this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
        });
        this.loading.present();

  }
}
