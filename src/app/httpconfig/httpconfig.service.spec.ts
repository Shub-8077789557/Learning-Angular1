import { TestBed, inject } from '@angular/core/testing';

import { HttpconfigService } from './httpconfig.service';

describe('HttpconfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpconfigService]
    });
  });

  it('should be created', inject([HttpconfigService], (service: HttpconfigService) => {
    expect(service).toBeTruthy();
  }));
});
