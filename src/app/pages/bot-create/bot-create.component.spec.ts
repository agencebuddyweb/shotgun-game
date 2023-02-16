import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotCreateComponent } from './bot-create.component';

describe('BotCreateComponent', () => {
  let component: BotCreateComponent;
  let fixture: ComponentFixture<BotCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
