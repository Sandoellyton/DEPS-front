import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../../shared/model/user';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {

  user: User;
  inputName: string;
  inputLogin: string;
  inputApartment: number;
  inputPass: string;
  private snackBar: MatSnackBar;


  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<RegistrationUserComponent>,
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  createUser(): void {
    this.user.name = this.inputName;
    this.user.login = this.inputLogin;
    this.user.apartment = this.inputApartment;
    this.user.pass = this.inputPass;
    this.userService.create(this.user).subscribe(
      user => console.log(user)
    );
    this.user = new User();
    this.cancel();
    window.location.reload();
  }
}
