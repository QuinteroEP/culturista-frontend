import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodestinoComponent } from './infodestino.component';

describe('InfodestinoComponent', () => {
  let component: InfodestinoComponent;
  let fixture: ComponentFixture<InfodestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfodestinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfodestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
