import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHarddrivediskComponent } from './create-harddrivedisk.component';

describe('CreateHarddrivediskComponent', () => {
  let component: CreateHarddrivediskComponent;
  let fixture: ComponentFixture<CreateHarddrivediskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHarddrivediskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHarddrivediskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
