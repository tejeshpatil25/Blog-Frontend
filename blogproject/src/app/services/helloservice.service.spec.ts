import { TestBed } from '@angular/core/testing';

import { HelloserviceService } from './helloservice.service';

describe('HelloserviceService', () => {
  let service: HelloserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
