import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { PoInputComponent } from '@po-ui/ng-components';

@Component({
  selector: 'thex-search',
  template: `<po-input #search p-icon="po-icon-search" p-placeholder="Buscar" class="thex-search" ></po-input>`,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @ViewChild('search', {static: true}) public searchInput: PoInputComponent;

  @Output() search = new EventEmitter();

  private inputListener: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.setListeners();
  }

  ngOnDestroy(): void {
    this.inputListener.unsubscribe();
  }

  public setListeners() {
    console.log(this.searchInput);
    this.inputListener = fromEvent(this.searchInput.inputEl.nativeElement, 'input')
      .pipe(
        map((event: Event) => (<HTMLInputElement>event.target).value),
        debounceTime(600)
      )
      .subscribe(term => this.search.emit(term));
  }

}
