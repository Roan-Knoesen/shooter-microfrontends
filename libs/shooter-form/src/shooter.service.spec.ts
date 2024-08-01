import { TestBed } from '@angular/core/testing';

import { ShooterService } from './lib/services/shooter.service';

describe('ShooterService', () => {
  let service: ShooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
