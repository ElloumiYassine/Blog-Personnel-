import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompetanceComponent } from './new-competance.component';

describe('NewCompetanceComponent', () => {
  let component: NewCompetanceComponent;
  let fixture: ComponentFixture<NewCompetanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCompetanceComponent]
    });
    fixture = TestBed.createComponent(NewCompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
