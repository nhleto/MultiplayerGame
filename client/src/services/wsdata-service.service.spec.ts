import { TestBed } from '@angular/core/testing';

import { WSDataServiceService } from './wsdata-service.service';

describe('WSDataServiceService', () => {
  let service: WSDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WSDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
