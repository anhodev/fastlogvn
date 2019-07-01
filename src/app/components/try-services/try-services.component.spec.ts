import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryServicesComponent } from './try-services.component';

describe('TryServicesComponent', () => {
  let component: TryServicesComponent;
  let fixture: ComponentFixture<TryServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
