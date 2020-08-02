import { Component, OnInit } from '@angular/core';
import { CrudFacadeService } from '../crud/+state/facade/crud-facade.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private crudFacade: CrudFacadeService) { }

  selected$: Observable<any>;

  ngOnInit(): void {
    this.selected$ = this.crudFacade.getById(null, false);
  }

}
