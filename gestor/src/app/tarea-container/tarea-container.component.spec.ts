import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaContainerComponent } from './tarea-container.component';

describe('TareaContainerComponent', () => {
  let component: TareaContainerComponent;
  let fixture: ComponentFixture<TareaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
