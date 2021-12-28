import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingReservesDialogComponent } from './listing-reserves-dialog.component';

describe('ListingReservesDialogComponent', () => {
  let component: ListingReservesDialogComponent;
  let fixture: ComponentFixture<ListingReservesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingReservesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingReservesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
