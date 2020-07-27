import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thex-page-list-template',
  templateUrl: './page-list-template.component.html',
  styleUrls: ['./page-list-template.component.scss']
})
export class PageListTemplateComponent implements OnInit {

  @Input() items = [];
  @Input() columns = [];

  actions = [
    {action: (item) => this.goEdit(item), label: 'Editar', icon: 'po-icon-edit' },
    {action: (item) => this.goDelete(item), label: 'Deletar' , icon: 'po-icon-delete' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeAll() {

  }

  goEdit(item) {

  }
  goDelete(item) {

  }
}
