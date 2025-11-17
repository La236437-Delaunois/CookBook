import { TestBed } from '@angular/core/testing';

import { PopupLivreModal } from './popup-livre-modal';

describe('PopupLivreModal', () => {
  let service: PopupLivreModal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupLivreModal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
