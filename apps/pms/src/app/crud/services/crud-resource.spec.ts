import { TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { CrudResource } from './crud-resource';

describe('CrudResource', () => {

  let service: CrudResource;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [
        CrudResource
      ]
    });
    service = TestBed.inject(CrudResource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
