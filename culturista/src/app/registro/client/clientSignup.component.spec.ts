import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComponentSignup } from './clientSignup.component';

describe('RegistroComponent', () => {
  let component: ClientComponentSignup;
  let fixture: ComponentFixture<ClientComponentSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientComponentSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientComponentSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
