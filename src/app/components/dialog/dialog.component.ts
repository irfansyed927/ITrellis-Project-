import {
  Component,
  OnInit,
  Inject
 } from '@angular/core';
 
 import {
  Car
 } from 'src/app/shared/models/Car';
 import {
  MatDialogRef,
  MAT_DIALOG_DATA
 } from '@angular/material';
 
 
 @Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
 })
 export class DialogComponent {
 
  constructor(//injecting dialog box component
   public dialogRef: MatDialogRef < DialogOverviewExampleDialog > ,
   @Inject(MAT_DIALOG_DATA) public car: Car) {}
 
  onNoClick(): void {//reset click event
   this.dialogRef.close();
  }
 
 }
