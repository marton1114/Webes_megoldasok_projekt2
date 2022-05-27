import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePowersupplyComponent } from './create-powersupply.component';

describe('CreatePowersupplyComponent', () => {
  let component: CreatePowersupplyComponent;
  let fixture: ComponentFixture<CreatePowersupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePowersupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePowersupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
