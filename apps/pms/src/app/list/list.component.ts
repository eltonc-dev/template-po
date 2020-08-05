import { Component, OnInit, ViewChild } from '@angular/core';

import { PoMenuItem, PoTableColumn, PoTableAction, PoInputComponent } from '@po-ui/ng-components';
import { CrudFacadeService } from './../crud/+state/facade/crud-facade.service';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { CrudModel } from './../crud/models/crud-model';
import { filter, debounce, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('search', {static: true}) searchInput: PoInputComponent;

  items$: Observable<CrudModel[]>;
  columns: PoTableColumn[];
  actions: PoTableAction[];

  constructor(private crudFacade: CrudFacadeService, private router: Router){}

  ngOnInit() {
    this.startSearch();
    this.setTableConfig();

    // 1 - get All
    this.items$ = this.crudFacade.getAll();
  }

  private setTableConfig() {
    this.columns = [
      {
        label: 'Nome',
        property: 'name'
      },
      {
        label: 'Idade',
        property: 'age'
      }
    ];
    this.actions = [
      {
        label: 'Editar',
        action: ({id}) => this.edit(id)
      },
      {
        label: 'Deletar',
        action: (item) => this.delete(item)
      }
    ]
  }

  private edit(id) {
    // 2 - get All
    this.crudFacade.getById(id);

    this.router.navigate(['edit']);

  }

  private delete(item) {
    // 3 - get All
    this.crudFacade.delete(item);

  }

  // It should be in search component
  private startSearch() {
    fromEvent(this.searchInput.inputEl.nativeElement, 'keyup').pipe(
      debounceTime(600)
    ).subscribe(
      // using crud to search
      // 5 - get All
      () => this.crudFacade.elasticSearch(this.searchInput.inputEl.nativeElement.value)
    );
  }

  new() {
    // reset item
    // 4 - get All
    this.crudFacade.resetCurrentItem();

    this.router.navigate(['new']);
  }

}
