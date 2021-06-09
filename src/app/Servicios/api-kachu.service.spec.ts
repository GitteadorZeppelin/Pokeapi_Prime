import { TestBed } from '@angular/core/testing';

import { ApiKachuService } from './api-kachu.service';

describe('ApiKachuService', () => {
  let service: ApiKachuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiKachuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
