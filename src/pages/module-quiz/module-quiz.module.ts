import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModuleQuizPage } from './module-quiz';

@NgModule({
  declarations: [
    ModuleQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(ModuleQuizPage),
  ],
})
export class ModuleQuizPageModule {}
