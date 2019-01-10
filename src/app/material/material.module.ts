import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressSpinnerModule, MatToolbarModule, MatButtonModule, MatSelectModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
