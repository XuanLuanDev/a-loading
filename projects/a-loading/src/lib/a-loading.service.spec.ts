import { TestBed } from '@angular/core/testing';

import { ALoadingService } from './a-loading.service';

describe('ALoadingService', () => {
  let service: ALoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ALoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
