import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddrivediskListComponent } from './harddrivedisk-list.component';

describe('HarddrivediskListComponent', () => {
  let component: HarddrivediskListComponent;
  let fixture: ComponentFixture<HarddrivediskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarddrivediskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarddrivediskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
