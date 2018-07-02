import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams , AlertController, Loading} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpProvider } from '../../providers/http/http';
import { TabsPage } from '../tabs/tabs';
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

  fname = '';
  lname = '';
  password = '';
  email = '';
  countryid = '';

  //public loading : Loading;
  loading: any;
  //regData = { email:'', password:'' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public authProvider: AuthProvider, public httpServices: HttpProvider, public alertCtrl: AlertController) {
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
      first_name : this.fname,
      last_name : this.lname,
      password : this.password,
      email : this.email,
      country_id : this.countryid
    };

    //register
    this.authProvider.createAccount(details).then((result) => {
        console.log(result);
        this.loading.dismiss().then(() => {
          this.navCtrl.push(LoginPage); //TabsPage
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

    //showLoader
    this.loading = this.loadingCtrl.create({
      //dismissOnPageChange: true,
      content: 'Registering...'
    });
    this.loading.present();
    this.alertCtrl.create({
      title: 'Registration Successful',
      subTitle: 'Please Login!',
      buttons: ['OK']
    }).present();
  }
}
