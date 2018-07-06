import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CategoryPage } from '../category/category';
import { HomePage } from '../home/home';
//import { CourseTabsPage } from '../coursetabs/coursetabs';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor(public navCtrl:NavController) {

  }

  getLogin(){
  	this.navCtrl.setRoot(LoginPage);
  }
}
