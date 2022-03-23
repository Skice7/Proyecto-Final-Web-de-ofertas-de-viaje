import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasDestacadasComponent } from './fechas-destacadas.component';

describe('FechasDestacadasComponent', () => {
  let component: FechasDestacadasComponent;
  let fixture: ComponentFixture<FechasDestacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechasDestacadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
