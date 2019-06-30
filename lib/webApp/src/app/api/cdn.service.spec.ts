import { TestBed } from '@angular/core/testing';

import { CdnService } from './cdn.service';

describe('CdnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CdnService = TestBed.get(CdnService);
    expect(service).toBeTruthy();
  });
});
