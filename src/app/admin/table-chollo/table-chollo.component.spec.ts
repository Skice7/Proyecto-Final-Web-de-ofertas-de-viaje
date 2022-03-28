import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCholloComponent } from './table-chollo.component';

describe('TableCholloComponent', () => {
  let component: TableCholloComponent;
  let fixture: ComponentFixture<TableCholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCholloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
