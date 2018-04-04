import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CourseInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-info',
  templateUrl: 'course-info.html',
})
export class CourseInfoPage {

	courselesson = this.navParams.get('module');

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	
  }

  ionViewDidLoad() {
    
  }

  back(){
    this.viewCtrl.dismiss();
  }

/*  open(){
  	let browser = this.iab.create("http://example.com/test", '_self');
		browser.executeScript({code: "(function() { alert(123); })()"
	});
  }*/
}
