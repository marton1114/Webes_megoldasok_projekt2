import { TestBed } from '@angular/core/testing';

import { HardDriveDiskService } from './harddrivedisk.service';

describe('HarddrivediskService', () => {
  let service: HardDriveDiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardDriveDiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
