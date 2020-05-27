import { TestBed } from '@angular/core/testing';

import { ConfirmMessageService } from './confirm-message.service';

describe('AlertMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmMessageService = TestBed.get(AlertMessageService);
    expect(service).toBeTruthy();
  });
});
