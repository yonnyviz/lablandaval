import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoIndustrialComponent } from './proyecto-industrial.component';

describe('ProyectoIndustrialComponent', () => {
  let component: ProyectoIndustrialComponent;
  let fixture: ComponentFixture<ProyectoIndustrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoIndustrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
