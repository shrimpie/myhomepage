/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebtrcService } from './webtrc.service';

describe('WebtrcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebtrcService]
    });
  });

  it('should ...', inject([WebtrcService], (service: WebtrcService) => {
    expect(service).toBeTruthy();
  }));
});
