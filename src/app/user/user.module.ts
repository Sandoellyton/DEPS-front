import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import {MatDatepicker} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardActions, MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    RegistrationUserComponent
  ],
  exports: [
    RegistrationUserComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatNativeDateModule,
    MatTableModule,
    MatSnackBar,
    MatIconModule,
    MatCardActions,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class UserModule {
}
