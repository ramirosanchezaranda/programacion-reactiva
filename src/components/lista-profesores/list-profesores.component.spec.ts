import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfesoresComponent } from './list-profesores.component';

describe('ListProfesoresComponent', () => {
  let component: ListProfesoresComponent;
  let fixture: ComponentFixture<ListProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
