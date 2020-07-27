import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thex-page-detail-list-template',
  templateUrl: './page-detail-list-template.component.html',
  styleUrls: ['./page-detail-list-template.component.scss']
})
export class PageDetailListTemplateComponent implements OnInit {

  @Input() items = [];
  @Input() columns = [];

  constructor() { }

  ngOnInit(): void {
  }

}
