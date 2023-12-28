import { Component } from '@angular/core';
import { wishItem } from '../../shared/wishitem';
import { WishListDisplayComponent } from '../wish-list-display/wish-list-display.component';
import { WishListInputComponent } from '../wish-list-input/wish-list-input.component';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [ WishListDisplayComponent, WishListInputComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
  wishArr : wishItem[] = [new wishItem("big pee pee", true), new wishItem("small pee pee", false), new wishItem("no pee pee", true)];


}
