import { Component, OnInit } from '@angular/core';
import { CrudFacadeService } from '../crud/+state/facade/crud-facade.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take, filter } from 'rxjs/operators';

@Component({
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private crudFacade: CrudFacadeService) { }

  selected$;
  item: any;

  ngOnInit(): void {
    
    this.form = this.fb.group({
      name: null,
      age: null
    });
    this.selected$ = this.crudFacade.getById(null, false)
    .pipe(filter(item => !!item)).subscribe(value => {
      this.item = value;
      this.form.patchValue(value);
    });
  }

  save() {
    this.crudFacade.save(this.form.getRawValue(), this.item? this.item.id : null).subscribe(item => {
      console.log('>>>', item)
    });

  }

}
