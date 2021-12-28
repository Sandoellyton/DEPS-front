import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrationAreasComponent} from './registration-areas.component';

describe('RegistrationAreasComponent', () => {
  let component: RegistrationAreasComponent;
  let fixture: ComponentFixture<RegistrationAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationAreasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
