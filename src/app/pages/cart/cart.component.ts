import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartItem } from '../../../data/cartItem';
import { CartService } from '../../Services/cart.service';
import { CartItemCardComponent } from '../../components/cart-item-card/cart-item-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductCardComponent, CartItemCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
updateCart() {
throw new Error('Method not implemented.');
}
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private _cartService: CartService)
  {
    this.cartItems = _cartService.getCart();
    console.log("cart Component: ");
    console.log(_cartService.getCart());

    this.totalPrice = _cartService.getTotalPrice();

  }

}
