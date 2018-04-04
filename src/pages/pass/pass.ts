import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the PassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pass',
  templateUrl: 'pass.html',
})
export class PassPage {

  password = '';

  cpass = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public httpService: HttpProvider) {
  }

  ionViewDidLoad() {
    this.httpService.getUser().subscribe(usrpass => {
      this.password = usrpass.password;
    },(err) => {
      console.log(err);
    });
  }

  back(){
    this.viewCtrl.dismiss();
  }

  getUpPass(){
    this.viewCtrl.dismiss();
  }
 

  public type = "password";
  public typeNew = "password";
  public typeCNew = "password"; 
  public showPass = false;
  public showPassNew = false;
  public showPassCNew = false;

  showPasswordCurent(){
	this.showPass = !this.showPass;
	if (this.showPass){
		this.type = "text";
	}else {
		this.type = "password";
    }
  }

  showPasswordNew(){
  	this.showPassNew = !this.showPassNew;
	if (this.showPassNew) {
		this.typeNew = "text";
	}else {
		this.typeNew = "password";
    }
  }

  showPasswordCNew(){
  	this.showPassCNew = !this.showPassCNew;
	if (this.showPassCNew) {
		this.typeCNew = "text";
	}else {
		this.typeCNew = "password";
    }
  }

}
