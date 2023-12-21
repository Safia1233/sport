import { TestBed } from '@angular/core/testing';

import { StaduimService } from './staduim.service';

describe('StaduimService', () => {
  let service: StaduimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaduimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
