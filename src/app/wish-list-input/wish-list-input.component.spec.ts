import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListInputComponent } from './wish-list-input.component';

describe('WishListInputComponent', () => {
  let component: WishListInputComponent;
  let fixture: ComponentFixture<WishListInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
