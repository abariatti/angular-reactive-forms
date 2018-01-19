import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormExampleComponent } from './pages/form-example/form-example.component';
import { ReactiveFormExampleComponent } from './pages/reactive-form-example/reactive-form-example.component';
import { DynamicFormExampleComponent } from './pages/dynamic-form-example/dynamic-form-example.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'form-example', component: FormExampleComponent },
  { path: 'reactive-form-example', component: ReactiveFormExampleComponent },
  { path: 'dynamic-form-example', component: DynamicFormExampleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
