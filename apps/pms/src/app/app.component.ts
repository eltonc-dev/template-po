import { Component, OnInit, ViewChild } from '@angular/core';

import { PoMenuItem, PoTableColumn, PoTableAction, PoInputComponent } from '@po-ui/ng-components';
import { CrudFacadeService } from './crud/+state/facade/crud-facade.service';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { CrudModel } from './crud/models/crud-model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private crudFacade: CrudFacadeService){}

  @ViewChild('search', {static: true}) searchInput: PoInputComponent;
  
  items$: Observable<CrudModel[]>;
  selectItem$: Observable<CrudModel>;
  columns: PoTableColumn[];
  actions: PoTableAction[];

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  ngOnInit() {
    this.startSearch();
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
    this.items$ = this.crudFacade.getAll();
    this.selectItem$ =  this.crudFacade.getById(null, false);

  }

  private edit(id) {
    console.log('item', id);
    this.crudFacade.getById(id);

  }

  private delete(item) {
    this.crudFacade.delete(item);

  }

  private startSearch() {
    fromEvent(this.searchInput.inputEl.nativeElement, 'keyup').pipe(
      filter((item: KeyboardEvent) => item.key === 'Enter')
    ).subscribe(() => this.crudFacade.elasticSearch(this.searchInput.inputEl.nativeElement.value));
  }

  new() {
    console.log('new');
    this.crudFacade.resetCurrentItem();
  }

}
