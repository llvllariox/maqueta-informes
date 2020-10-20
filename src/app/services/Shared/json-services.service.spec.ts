import { TestBed } from '@angular/core/testing';

import { JsonServicesService } from './json-services.service';

describe('JsonServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonServicesService = TestBed.get(JsonServicesService);
    expect(service).toBeTruthy();
  });
});
