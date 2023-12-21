import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditePlayerComponent } from './edite-player.component';

describe('EditePlayerComponent', () => {
  let component: EditePlayerComponent;
  let fixture: ComponentFixture<EditePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
