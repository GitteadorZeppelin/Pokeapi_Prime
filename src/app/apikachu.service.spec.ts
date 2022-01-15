import { TestBed } from '@angular/core/testing';

import { ApikachuService } from './apikachu.service';

describe('ApikachuService', () => {
  let service: ApikachuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApikachuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
