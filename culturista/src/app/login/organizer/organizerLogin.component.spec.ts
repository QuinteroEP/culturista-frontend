import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerLoginComponent } from './organizerLogin.component';

describe('OrganizerLoginComponent', () => {
  let component: OrganizerLoginComponent;
  let fixture: ComponentFixture<OrganizerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
