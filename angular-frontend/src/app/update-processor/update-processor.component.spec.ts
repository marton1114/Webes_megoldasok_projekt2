import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProcessorComponent } from './update-processor.component';

describe('UpdateProcessorComponent', () => {
  let component: UpdateProcessorComponent;
  let fixture: ComponentFixture<UpdateProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
