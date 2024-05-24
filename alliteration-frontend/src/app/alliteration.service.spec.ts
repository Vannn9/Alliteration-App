import { TestBed } from '@angular/core/testing';

import { AlliterationsService } from './alliteration.service';

describe('AlliterationService', () => {
  let service: AlliterationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlliterationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
