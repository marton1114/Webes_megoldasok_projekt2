import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMotherboardComponent } from './update-motherboard.component';

describe('UpdateMotherboardComponent', () => {
  let component: UpdateMotherboardComponent;
  let fixture: ComponentFixture<UpdateMotherboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMotherboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMotherboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
