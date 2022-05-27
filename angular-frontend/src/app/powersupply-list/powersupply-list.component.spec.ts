import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersupplyListComponent } from './powersupply-list.component';

describe('PowersupplyListComponent', () => {
  let component: PowersupplyListComponent;
  let fixture: ComponentFixture<PowersupplyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowersupplyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersupplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
