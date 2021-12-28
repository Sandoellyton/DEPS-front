import {Component, Inject, OnInit} from '@angular/core';
import {Area} from '../../shared/model/area';
import {AreaService} from '../../shared/services/area.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-areas',
  templateUrl: './registration-areas.component.html',
  styleUrls: ['./registration-areas.component.scss']
})
export class RegistrationAreasComponent implements OnInit {

  area: Area;
  inputName: string;
  inputImage: string;
  inputDescription: string;
  private snackBar: MatSnackBar;
  isEdit: boolean;

  constructor(
    private areaService: AreaService,
    public dialogRef: MatDialogRef<RegistrationAreasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.area = new Area();
    let list;
    if (this.area.id) {
      list = areaService.list();
      this.area = list.filter(area => {
        return area.id === this.area.id;
      });
      console.log(this.area);
      this.inputName = this.area.name;
      this.inputImage = this.area.image;
      this.inputDescription = this.area.description;
      this.isEdit = false;
    } else {
      this.isEdit = true;
    }
  }

  ngOnInit(): void {
    this.area = this.data.area;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  createArea(): void {
    this.area.id = null;
    this.area.name = this.inputName;
    this.area.image = this.inputImage;
    this.area.description = this.inputDescription;
    this.areaService.create(this.area).subscribe(
      area => console.log(area)
    );
    this.area = new Area();
    this.cancel();
    window.location.reload();
  }
}
