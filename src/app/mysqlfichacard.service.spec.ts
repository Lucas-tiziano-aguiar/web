import { TestBed } from '@angular/core/testing';

import { MysqlfichacardService } from './mysqlfichacard.service';

describe('MysqlfichacardService', () => {
  let service: MysqlfichacardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysqlfichacardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
