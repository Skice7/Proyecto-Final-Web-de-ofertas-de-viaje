import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCholloComponent } from './edit-chollo.component';

describe('EditCholloComponent', () => {
  let component: EditCholloComponent;
  let fixture: ComponentFixture<EditCholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCholloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
