import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersupplyDetailsComponent } from './powersupply-details.component';

describe('PowersupplyDetailsComponent', () => {
  let component: PowersupplyDetailsComponent;
  let fixture: ComponentFixture<PowersupplyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowersupplyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersupplyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
