import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaintListComponent } from './compaint-list.component';

describe('CompaintListComponent', () => {
  let component: CompaintListComponent;
  let fixture: ComponentFixture<CompaintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
