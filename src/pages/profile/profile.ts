import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	usersedit : any;
  usercoun : any;

	fname = '';
	lname = '';
	email = '';
  startdate = '';
  batchid = '';
  companyid = '';
  countryid = '';
  groupid = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, public httpService: HttpProvider, public viewCtrl: ViewController, public toastCtrl: ToastController) {
  
  }

  ionViewDidLoad() {
  	
    this.httpService.getUser().subscribe((data) => {
  		this.usersedit = data;
  		this.fname = this.usersedit.first_name;
  		this.lname = this.usersedit.last_name;
  		this.email = this.usersedit.email;
      this.startdate = this.usersedit.startdate;
      this.batchid = this.usersedit.batch_id;
      this.companyid = this.usersedit.company_id;
      this.countryid = this.usersedit.country_id;
      this.groupid = this.usersedit.group_id;
  		console.log(this.usersedit)
  	}, (err) => {
  		console.log(err);
  	});

    this.httpService.getCountry().subscribe((data) => {
      this.usercoun = data;
      console.log(this.usercoun);
    }, (err) => {
      console.log(err);
    });

  }

  getUpdate(){

  	let userinfo = {
  		first_name : this.fname,
  		last_name : this.lname,
  		email : this.email,
      startdate : this.startdate,
      batch_id : this.batchid,
      company_id : this.companyid,
      country_id : this.countryid,
      group_id : this.groupid
  	}

  	this.authService.getUserUpdate(userinfo).then((result) => {
  		console.log(result);
      this.toastCtrl.create({
        message: 'Successfully Edited',
        showCloseButton: true,
        closeButtonText: 'OK'
      }).present();
  	  this.viewCtrl.dismiss();
  	}, (err) => {
  		console.log(err);
  	});
  }

  back(){
    this.viewCtrl.dismiss();
  }

}