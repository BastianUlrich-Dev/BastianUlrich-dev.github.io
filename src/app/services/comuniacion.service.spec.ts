import { TestBed } from '@angular/core/testing';

import { ComuniacionService } from './comuniacion.service';

describe('ComuniacionService', () => {
  let service: ComuniacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComuniacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
