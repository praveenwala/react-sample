import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableComponentComponent } from './custom-table-component.component';

describe('CustomTableComponentComponent', () => {
  let component: CustomTableComponentComponent;
  let fixture: ComponentFixture<CustomTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
