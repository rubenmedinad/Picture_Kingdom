import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarpagoComponent } from './finalizarpago.component';

describe('FinalizarpagoComponent', () => {
  let component: FinalizarpagoComponent;
  let fixture: ComponentFixture<FinalizarpagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarpagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
