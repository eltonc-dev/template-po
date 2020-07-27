import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'thex-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() icon = 'po-icon-arrow-left';
  @Input() type: string;
  @Input() disabled: boolean;

  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pClick() {
    this.clicked.emit();
  }

}
