import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantViewComponent } from './variant-view.component';

describe('VariantViewComponent', () => {
  let component: VariantViewComponent;
  let fixture: ComponentFixture<VariantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
