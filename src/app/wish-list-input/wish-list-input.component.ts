import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { wishItem } from '../../shared/wishitem';

@Component({
  selector: 'app-wish-list-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-list-input.component.html',
  styleUrl: './wish-list-input.component.scss'
})
export class WishListInputComponent {
  @Output() addWishEvent : EventEmitter<wishItem> = new EventEmitter<wishItem>();
  inputWish : string = "fireee";

  addWish(){
    this.addWishEvent.emit(new wishItem(this.inputWish, false));
  }
}
