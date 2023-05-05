import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeUserComponent } from './welcomeuser.component';

describe('WelcomeComponent', () => {
  let component: WelcomeUserComponent;
  let fixture: ComponentFixture<WelcomeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
