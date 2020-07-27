import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thex-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() items = [];
  @Input() columns = [];
  @Input() height: number;
  @Input() actions: any[] = [];


  constructor() { }


  ngOnInit(): void {
  }

  loadMore() {

  }
}
