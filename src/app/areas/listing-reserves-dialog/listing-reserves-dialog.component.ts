import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Area } from 'src/app/shared/model/area';
import {MatTableDataSource} from '@angular/material/table';
import { Reserve } from 'src/app/shared/model/reserve';
import { ReserveService } from 'src/app/shared/services/reserve.service';

@Component({
  selector: 'app-listing-reserves-dialog',
  templateUrl: './listing-reserves-dialog.component.html',
  styleUrls: ['./listing-reserves-dialog.component.scss']
})
export class ListingReservesDialogComponent implements OnInit {
  dataSource: MatTableDataSource<Reserve>;
  mostrarColunas: string[] = ['id', 'date', 'apartment', 'reason', 'actions'];
  area: Area;
  constructor(public dialogRef: MatDialogRef<ListingReservesDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private reserveService: ReserveService) {
    this.area = new Area();
  }

  ngOnInit(): void {
    this.area = this.data.area;
    console.log(this.area);

  }
  ngAfterViewInit(): void{
    this.reserveService.list().subscribe(
      reserves => {
        reserves = reserves.filter((reserve) => reserve.id_area === this.area.id)
        this.dataSource = new MatTableDataSource(reserves)
      }
    )
  }

  /*removerReserva(id: number): void {
    this.reserveService.remover(id).subscribe();
    window.location.reload();
  }*/

  removerReserva(id: number): void {
    this.reserveService.remover(id).subscribe(
      apagado => {
        const indx = this.dataSource.data.findIndex(reserve => reserve.id === id);
        if (indx > -1) {
          this.dataSource.data.splice(indx, 1);
          this.dataSource = new MatTableDataSource<Reserve>(this.dataSource.data);
        }
      }
    );
  }

}
