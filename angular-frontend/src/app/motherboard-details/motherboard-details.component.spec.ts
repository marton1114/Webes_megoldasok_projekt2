import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardDetailsComponent } from './motherboard-details.component';

describe('MotherboardDetailsComponent', () => {
  let component: MotherboardDetailsComponent;
  let fixture: ComponentFixture<MotherboardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
