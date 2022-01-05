import { TestBed } from '@angular/core/testing';

import { YschoolService } from './yschool.service';

describe('YschoolService', () => {
  let service: YschoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YschoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
