import { TestBed } from '@angular/core/testing';

import { AddShooterService } from './add-shooter.service';

describe('AddShooterService', () => {
  let service: AddShooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddShooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
