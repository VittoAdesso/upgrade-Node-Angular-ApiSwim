import { TestBed } from '@angular/core/testing';

import { LibreServicesService } from './libre-services.service';

describe('LibreServicesService', () => {
  let service: LibreServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
