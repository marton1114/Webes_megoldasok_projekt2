import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePowersupplyComponent } from './update-powersupply.component';

describe('UpdatePowersupplyComponent', () => {
  let component: UpdatePowersupplyComponent;
  let fixture: ComponentFixture<UpdatePowersupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePowersupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePowersupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
