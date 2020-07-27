import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thex-page-default-template',
  templateUrl: './page-default-template.component.html',
  styleUrls: ['./page-default-template.component.scss']
})
export class PageDefaultTemplateComponent implements OnInit {

  @Input() breadCrumbItems = [
    { label: 'Home' },
    { label: 'Consultas' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
