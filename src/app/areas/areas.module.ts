import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReserveDialogComponent } from './reserve-dialog/reserve-dialog.component';
import {MatCardModule} from '@angular/material/card';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListingReservesDialogComponent } from './listing-reserves-dialog/listing-reserves-dialog.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ReserveDialogComponent,
    ListingReservesDialogComponent
  ],
  exports: [
    ReserveDialogComponent,
    ListingReservesDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepicker,
    MatNativeDateModule,
    MatSnackBar,
    MatTableModule
  ]
})
export class AreasModule {
}
