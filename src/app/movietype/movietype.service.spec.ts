import { TestBed } from '@angular/core/testing';

import { MovietypeService } from './movietype.service';

describe('MovietypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovietypeService = TestBed.get(MovietypeService);
    expect(service).toBeTruthy();
  });
});
