import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListingAreasComponent} from './listing-areas.component';

describe('ListingAreasComponent', () => {
  let component: ListingAreasComponent;
  let fixture: ComponentFixture<ListingAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingAreasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
