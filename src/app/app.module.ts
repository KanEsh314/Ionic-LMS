import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Ionic2RatingModule } from 'ionic2-rating';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { CourseTabsPage } from '../pages/coursetabs/coursetabs';
import { CoursehomePage } from '../pages/coursehome/coursehome';
import { GradesPage } from '../pages/grades/grades';
import { MessagesPage } from '../pages/messages/messages';
import { BadgePage } from '../pages/badge/badge';
import { CourseIntroPage } from '../pages/course-intro/course-intro';
import { CourseInfoPage } from '../pages/course-info/course-info';
import { ModuleQuizPage } from '../pages/module-quiz/module-quiz';
import { TextPage } from '../pages/text/text';
import { ScorePage } from '../pages/score/score'; 
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { PassPage } from '../pages/pass/pass';
import { QuizPage } from '../pages/quiz/quiz'; 
import { QuizSummaryPage } from '../pages/quiz-summary/quiz-summary';
import { EnrollPage } from '../pages/enroll/enroll';
import { ForgotPage } from '../pages/forgot/forgot';

import { YoutubePipe } from '../pipes/youtube/youtube';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth/auth';
import { FlashCardComponent } from '../components/flash-card/flash-card';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    LoginPage,
    CourseTabsPage,
    YoutubePipe,
    CoursehomePage,
    GradesPage,
    MessagesPage,
    BadgePage,
    CourseIntroPage,
    CourseInfoPage,
    ModuleQuizPage,
    ScorePage,
    TextPage,
    ProfilePage,
    RegisterPage,
    PassPage,
    QuizPage,
    QuizSummaryPage,
    EnrollPage,
    ForgotPage,
    FlashCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    Ionic2RatingModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    LoginPage,
    CourseTabsPage,
    CoursehomePage,
    GradesPage,
    MessagesPage,
    BadgePage,
    CourseIntroPage,
    CourseInfoPage,
    ModuleQuizPage,
    ScorePage,
    TextPage,
    ProfilePage,
    RegisterPage,
    PassPage,
    QuizPage,
    QuizSummaryPage,
    EnrollPage,
    ForgotPage,
    FlashCardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    AuthProvider
  ]
})
export class AppModule {}
