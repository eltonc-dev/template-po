import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailListTemplateComponent } from './page-detail-list-template.component';

describe('PageDetailListTemplateComponent', () => {
  let component: PageDetailListTemplateComponent;
  let fixture: ComponentFixture<PageDetailListTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailListTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
