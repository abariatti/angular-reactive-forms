import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { ThemePickerModule } from './shared/theme-picker';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormExampleComponent } from './pages/form-example/form-example.component';
import { ReactiveFormExampleComponent } from './pages/reactive-form-example/reactive-form-example.component';
import { DynamicFormExampleComponent } from './pages/dynamic-form-example/dynamic-form-example.component';
import { DynamicFormComponent } from './pages/dynamic-form-example/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './pages/dynamic-form-example/dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { MatDynamicFormComponent } from './pages/dynamic-form-example/mat-dynamic-form/mat-dynamic-form.component';
import { MatDynamicFormQuestionComponent } from './pages/dynamic-form-example/mat-dynamic-form/mat-dynamic-form-question/mat-dynamic-form-question.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormExampleComponent,
    ReactiveFormExampleComponent,
    DynamicFormExampleComponent, 
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    MatDynamicFormComponent,
    MatDynamicFormQuestionComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ThemePickerModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
