import { Component, Input } from '@angular/core';
import { wishItem } from '../../shared/wishitem';

@Component({
  selector: 'app-wish-list-display',
  standalone: true,
  imports: [],
  templateUrl: './wish-list-display.component.html',
  styleUrl: './wish-list-display.component.scss'
})
export class WishListDisplayComponent {
  @Input() disWishArr : wishItem[] = [];
}
