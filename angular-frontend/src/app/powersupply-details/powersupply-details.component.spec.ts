import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupplyDetailsComponent } from './powersupply-details.component';

describe('PowerSupplyDetailsComponent', () => {
  let component: PowerSupplyDetailsComponent;
  let fixture: ComponentFixture<PowerSupplyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerSupplyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSupplyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
