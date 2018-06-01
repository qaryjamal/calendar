import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DemoUtilsModule } from '../demo-utils/module';
import { AppComponent } from './app.component';

import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
  
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
