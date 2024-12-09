import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedListsComponent } from './completed-lists.component';

describe('CompletedListsComponent', () => {
  let component: CompletedListsComponent;
  let fixture: ComponentFixture<CompletedListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
