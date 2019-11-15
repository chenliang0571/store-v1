import { TestBed } from '@angular/core/testing';

import { LbsService } from './lbs.service';

describe('LbsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LbsService = TestBed.get(LbsService);
    expect(service).toBeTruthy();
  });
});
