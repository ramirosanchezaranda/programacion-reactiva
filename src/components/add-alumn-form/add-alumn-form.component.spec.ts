import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlumnFormComponent } from './add-alumn-form.component';

describe('AddAlumnFormComponent', () => {
  let component: AddAlumnFormComponent;
  let fixture: ComponentFixture<AddAlumnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlumnFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
