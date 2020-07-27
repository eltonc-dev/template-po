import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTemplateComponent } from './page-list-template.component';

describe('PageListTemplateComponent', () => {
  let component: PageListTemplateComponent;
  let fixture: ComponentFixture<PageListTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
