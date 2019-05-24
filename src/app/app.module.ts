import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule } from '@angular/forms' ;

import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule, MatDialogModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

import { ViewComponent } from './components/view/view.component';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, HttpModule,
    ReactiveFormsModule,FormsModule,
    MatButtonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonToggleModule
  ],
  exports:[MatRadioModule],
    entryComponents: [DialogComponent],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }