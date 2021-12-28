import {Component, Inject, OnInit} from '@angular/core';
import {Area} from '../../shared/model/area';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import { ReserveService } from 'src/app/shared/services/reserve.service';
import { UserService } from 'src/app/shared/services/user.service';
import {User} from '../../shared/model/user';
import {Reserve} from '../../shared/model/reserve';


@Component({
  selector: 'app-reserve-dialog',
  templateUrl: './reserve-dialog.component.html',
  styleUrls: ['./reserve-dialog.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class ReserveDialogComponent implements OnInit {
  area: Area;
  date: Date;
  apartment: Number;
  reason: String;
  users: Array<User>;
  reserves: Array<Reserve>;
  reserve: Reserve;
  index: number;

  constructor(private reserveService: ReserveService,
    private userService: UserService,
    public dialogRef: MatDialogRef<ReserveDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.area = new Area();
    this.reserve = new Reserve();
    this.index = 0
  }

  ngOnInit(): void {
    this.area = this.data.area;
    console.log(this.area);
  }
  createReserve(){
    const dateToDB = moment(this.date).format("DD-MM-YYYY");
    // console.log(dateToDB)

    this.userService.list().subscribe(
      (users) => this.users = users
    );
    // const selectUser = this.users.filter((user) => user.apartment === this.apartment)
    
    
    this.reserveService.list().subscribe(
      (reserves) => {
        this.index = reserves.length
        this.reserves = reserves.filter((res) => res.id_area === this.area.id)
        console.log(this.index)

        if(this.isReserved(this.reserves, dateToDB).length > 0){
          console.log('Já reservado')
        } else{
          console.log('reservando')
          console.log(this.index)
          this.index = this.index + 1
          this.reserve.id = this.index
          console.log(this.index+' '+ this.reserve.id)
          this.reserve.id_area = this.area.id
          this.reserve.date = dateToDB
          this.reserve.apartment = this.apartment
          this.reserve.reason = this.reason
          this.reserveService.create(this.reserve).subscribe(
            reserve => {
              console.log(reserve)
              this.dialogRef.close();
            }
          );
        }
      }
    );
    
    //const selectAreaReserves = this.reserves.filter((reserve) => reserve.id_area === this.area.id)
    
    
  }
  isReserved(reserves: Array<Reserve>, date: String){
    return reserves.filter((reserve) => reserve.date == date)
  }
}

