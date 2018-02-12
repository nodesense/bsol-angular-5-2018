import { TestBed, inject } from '@angular/core/testing';

import { BrandsResolveService } from './brands-resolve.service';

describe('BrandsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandsResolveService]
    });
  });

  it('should be created', inject([BrandsResolveService], (service: BrandsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
