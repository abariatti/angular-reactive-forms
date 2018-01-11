import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
         MatCardModule,
         MatCheckboxModule,
         MatDialogModule,
         MatIconModule,
         MatInputModule,
         MatListModule,
         MatMenuModule,
         MatSelectModule,
         MatSidenavModule,
         MatSlideToggleModule,
         MatTabsModule,
         MatToolbarModule,
         MatGridListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { DynamicFormExampleComponent } from './pages/dynamic-form-example/dynamic-form-example.component';
import { DynamicFormComponent } from './pages/dynamic-form-example/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './pages/dynamic-form-example/dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { MatDynamicFormComponent } from './pages/dynamic-form-example/mat-dynamic-form/mat-dynamic-form.component';
import { MatDynamicFormQuestionComponent } from './pages/dynamic-form-example/mat-dynamic-form/mat-dynamic-form-question/mat-dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    ReactiveFormComponent,
    DynamicFormExampleComponent, 
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    MatDynamicFormComponent,
    MatDynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
