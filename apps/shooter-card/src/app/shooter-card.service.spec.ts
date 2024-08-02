import { TestBed } from '@angular/core/testing';

import { GetShootersService } from './shooter-card.service';

describe('GetShootersService', () => {
  let service: GetShootersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetShootersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
