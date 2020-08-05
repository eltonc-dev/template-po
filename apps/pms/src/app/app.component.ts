import { Component, OnInit, ViewChild } from '@angular/core';

import { PoMenuItem, PoTableColumn, PoTableAction, PoInputComponent } from '@po-ui/ng-components';
import { CrudFacadeService } from './crud/+state/facade/crud-facade.service';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { CrudModel } from './crud/models/crud-model';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
