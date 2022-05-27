import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddrivediskDetailsComponent } from './harddrivedisk-details.component';

describe('HarddrivediskDetailsComponent', () => {
  let component: HarddrivediskDetailsComponent;
  let fixture: ComponentFixture<HarddrivediskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarddrivediskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarddrivediskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
