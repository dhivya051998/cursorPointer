import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDivComponent } from './create-div.component';

describe('CreateDivComponent', () => {
  let component: CreateDivComponent;
  let fixture: ComponentFixture<CreateDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
