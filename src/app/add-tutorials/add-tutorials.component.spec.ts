import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutorialsComponent } from './add-tutorials.component';

describe('AddTutorialsComponent', () => {
  let component: AddTutorialsComponent;
  let fixture: ComponentFixture<AddTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});