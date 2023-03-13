import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLibComponent } from './chat-lib.component';

describe('ChatLibComponent', () => {
  let component: ChatLibComponent;
  let fixture: ComponentFixture<ChatLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
