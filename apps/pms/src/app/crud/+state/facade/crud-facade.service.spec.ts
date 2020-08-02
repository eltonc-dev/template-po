import { TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { CrudFacadeService } from './crud-facade.service';

describe('CrudFacadeService', () => {

  let service: CrudFacadeService;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [
        CrudFacadeService
      ]
    });
    service = TestBed.inject(CrudFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
