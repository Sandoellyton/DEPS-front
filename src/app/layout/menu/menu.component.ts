import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {RegistrationAreasComponent} from '../../areas/registration-areas/registration-areas.component';
import {RegistrationUserComponent} from '../../user/registration-user/registration-user.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

is_adm: String;

  constructor(
    public dialog: MatDialog,
    private rotaAtual: ActivatedRoute
  ) {
    this.is_adm = this.rotaAtual.snapshot.paramMap.get('user');
  }


  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationAreasComponent, {
      width: '500px'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUserDialog(): void {
    const dialogRef = this.dialog.open(RegistrationUserComponent, {
      width: '500px'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
