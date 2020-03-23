import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {APP_ROUTING} from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FindJobComponent } from './find-job/find-job.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_ROUTING,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, FindJobComponent, RegistrationComponent, LoginUserComponent, FeedbackComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
