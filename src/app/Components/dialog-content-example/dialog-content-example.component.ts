import { Component, Inject } from '@angular/core';

import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
@Component({
  selector: 'dialogbox',
  standalone:true,
  templateUrl: './dialog-content-example.component.html',

  imports:[
    MatDialogModule,
  ],
})
export class DialogContentExampleComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}