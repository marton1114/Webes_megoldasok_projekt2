import { TestBed } from '@angular/core/testing';

import { PowerSupplyService } from './powersupply.service';

describe('PowerSupplyService', () => {
  let service: PowerSupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerSupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
