import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentListsComponent } from './current-lists.component';

describe('CurrentListsComponent', () => {
  let component: CurrentListsComponent;
  let fixture: ComponentFixture<CurrentListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
