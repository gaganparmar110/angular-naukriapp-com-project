import {Routes,RouterModule,PreloadAllModules,NoPreloading, ROUTES} from '@angular/router'
import {ModuleWithProviders, Component} from '@angular/core';
import { AppComponent } from './app.component';
import {FindJobComponent} from './find-job/find-job.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { FeedbackComponent } from './feedback/feedback.component';

const APP_ROUTES: Routes=[{
  path:'findjobs',component: FindJobComponent
  
},
{
  path:'register',component:RegistrationComponent
},
{
  path:'login', component : LoginUserComponent
},
{
  path:'home', component: AppComponent
},
{
  path:'feedback', component: FeedbackComponent
},
];

export const APP_ROUTING : ModuleWithProviders=RouterModule.forRoot(APP_ROUTES,{
  preloadingStrategy:NoPreloading,
});