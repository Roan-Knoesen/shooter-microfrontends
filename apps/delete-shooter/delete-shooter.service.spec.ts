import { TestBed } from '@angular/core/testing';

import { DeleteShooterService } from './delete-shooter.service';

describe('DeleteShooterService', () => {
  let service: DeleteShooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteShooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
