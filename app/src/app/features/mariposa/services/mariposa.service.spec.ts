import { TestBed } from '@angular/core/testing';

import { MariposaService } from './mariposa.service';

describe('MariposaService', () => {
  let service: MariposaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MariposaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
