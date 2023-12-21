import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeTeamComponent } from './edite-team.component';

describe('EditeTeamComponent', () => {
  let component: EditeTeamComponent;
  let fixture: ComponentFixture<EditeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
