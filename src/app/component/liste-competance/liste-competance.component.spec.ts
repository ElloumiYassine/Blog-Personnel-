import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCompetanceComponent } from './liste-competance.component';

describe('ListeCompetanceComponent', () => {
  let component: ListeCompetanceComponent;
  let fixture: ComponentFixture<ListeCompetanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCompetanceComponent]
    });
    fixture = TestBed.createComponent(ListeCompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
