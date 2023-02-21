import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualDetailComponent } from './dual-detail.component';

describe('DualDetailComponent', () => {
  let component: DualDetailComponent;
  let fixture: ComponentFixture<DualDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
