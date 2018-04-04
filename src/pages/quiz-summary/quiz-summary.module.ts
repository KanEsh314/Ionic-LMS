import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizSummaryPage } from './quiz-summary';

@NgModule({
  declarations: [
    QuizSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizSummaryPage),
  ],
})
export class QuizSummaryPageModule {}
