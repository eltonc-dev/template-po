import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thex-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {


  @Input() title = "Consulta geral de reservas";

  @Input() iconActions = [
    {
      icon: 'po-icon-plus',
      type: 'primary'
    },
    // {
    //   icon: 'po-icon-plus',
    //   type: 'primary'
    // }
  ];

  buttons = [
    { label: 'Check-in hoje', action: () => {} },
    { label: 'Check-out hoje', action: () => {} },
    { label: 'Deadline Venc.', action: () => {} },
    { label: 'In House', action: () => {} }
  ];

  // buttons = null;

  constructor() { }

  ngOnInit(): void {
  }

}
