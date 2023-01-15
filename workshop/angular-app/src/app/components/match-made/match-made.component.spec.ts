import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchMadeComponent } from './match-made.component';

describe('MatchMadeComponent', () => {
  let component: MatchMadeComponent;
  let fixture: ComponentFixture<MatchMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchMadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
