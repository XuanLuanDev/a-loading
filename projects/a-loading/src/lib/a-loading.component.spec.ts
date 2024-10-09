import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALoadingComponent } from './a-loading.component';

describe('ALoadingComponent', () => {
  let component: ALoadingComponent;
  let fixture: ComponentFixture<ALoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
