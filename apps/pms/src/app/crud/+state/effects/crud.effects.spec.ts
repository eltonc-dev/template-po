import { TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { CrudEffects } from './crud.effects';

describe('CrudEffects', () => {

  let service: CrudEffects;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [
        CrudEffects
      ]
    });
    service = TestBed.inject(CrudEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
