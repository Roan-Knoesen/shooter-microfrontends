import { TestBed } from '@angular/core/testing';

import { UpdateShooterService } from './update-shooter.service';

describe('UpdateShooterService', () => {
  let service: UpdateShooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateShooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
