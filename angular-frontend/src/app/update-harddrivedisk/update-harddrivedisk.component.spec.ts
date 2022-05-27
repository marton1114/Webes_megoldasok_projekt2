import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHarddrivediskComponent } from './update-harddrivedisk.component';

describe('UpdateHarddrivediskComponent', () => {
  let component: UpdateHarddrivediskComponent;
  let fixture: ComponentFixture<UpdateHarddrivediskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHarddrivediskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHarddrivediskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
