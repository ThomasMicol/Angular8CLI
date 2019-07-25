import { TestBed } from '@angular/core/testing';

import { UpgradeGeneratorServiceService } from './upgrade-generator-service.service';

describe('UpgradeGeneratorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpgradeGeneratorServiceService = TestBed.get(UpgradeGeneratorServiceService);
    expect(service).toBeTruthy();
  });
});
