import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefaultTemplateComponent } from './page-default-template.component';

describe('PageDefaultTemplateComponent', () => {
  let component: PageDefaultTemplateComponent;
  let fixture: ComponentFixture<PageDefaultTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDefaultTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDefaultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
