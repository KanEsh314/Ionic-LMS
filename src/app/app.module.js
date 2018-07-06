var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CategoryPage } from '../pages/category/category';
import { CategoryCoursePage } from '../pages/categorycourse/categorycourse';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { CourseTabsPage } from '../pages/coursetabs/coursetabs';
import { CoursehomePage } from '../pages/coursehome/coursehome';
import { GradesPage } from '../pages/grades/grades';
import { MessagesPage } from '../pages/messages/messages';
import { YoutubePipe } from '../pipes/youtube/youtube';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            CategoryPage,
            CategoryCoursePage,
            ContactPage,
            HomePage,
            TabsPage,
            IntroPage,
            LoginPage,
            CourseTabsPage,
            YoutubePipe,
            CoursehomePage,
            GradesPage,
            MessagesPage
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            AboutPage,
            CategoryPage,
            CategoryCoursePage,
            ContactPage,
            HomePage,
            TabsPage,
            IntroPage,
            LoginPage,
            CourseTabsPage,
            CoursehomePage,
            GradesPage,
            MessagesPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map