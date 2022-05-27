import { TestBed } from '@angular/core/testing';

import { HarddrivediskService } from './harddrivedisk.service';

describe('HarddrivediskService', () => {
  let service: HarddrivediskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarddrivediskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
