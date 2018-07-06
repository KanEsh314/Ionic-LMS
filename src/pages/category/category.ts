import { Component } from '@angular/core';
import { NavController , ModalController, LoadingController, AlertController } from 'ionic-angular';
import { CategoryCoursePage } from '../categorycourse/categorycourse';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage{

  categories : any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loadCtrl: LoadingController, public alertCtrl: AlertController, public authProvider: AuthProvider, public httpService: HttpProvider) {
  }

  searchItems(ev){
    var val = ev.target.value;
    if (val && val.trim() != ''){
      this.categories = this.categories.filter((category) => {
        return (category.category_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getRefresh(refresher){
    setTimeout(() => {
      this.ionViewDidLoad();
      refresher.complete();
    },2000);
  }

  ionViewDidLoad(){
    let load = this.loadCtrl.create({
      content: 'Please Wait'
    });
    load.present();

    this.httpService.getCategory().subscribe((data) => {
    	this.categories = data;
      load.dismiss();
    }, (err) => {
      load.dismiss();
      this.alertCtrl.create({
        title: 'Internet Connection Error',
         message: 'Please Connect To Working Internet Connection',
         buttons: ['OK']
      }).present();
    });
  }

  getCategoryList(category){
  	this.modalCtrl.create(CategoryCoursePage,{category: category}).present();
  }
}
