import { TestBed } from '@angular/core/testing';

import { EspaldaService } from './espalda.service';

describe('EspaldaService', () => {
  let service: EspaldaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspaldaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
