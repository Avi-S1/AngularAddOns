import { TestBed } from '@angular/core/testing';

import { GamarayService } from './gamaray.service';

describe('GamarayService', () => {
  let service: GamarayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamarayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
