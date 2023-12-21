import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeMatchComponent } from './edite-match.component';

describe('EditeMatchComponent', () => {
  let component: EditeMatchComponent;
  let fixture: ComponentFixture<EditeMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
