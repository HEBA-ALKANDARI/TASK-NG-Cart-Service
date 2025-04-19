import { Injectable } from '@angular/core';
import { CartItem } from '../../data/cartItem';
import { Product } from '../../data/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: CartItem[] = [];

  constructor() { }

  addToCart(product: Product)
  {
    this.cartItem.push({product: product, quantity: 1});
  }

  getCart()
  {
    return this.cartItem;
  }

  updateQuantity(productId: number, amount: number)
  {
    this.cartItem.filter(cartItem => cartItem.product.id === productId).map(cartItem => {
      if (cartItem.product.stock >= cartItem.quantity + amount)
        cartItem.quantity += amount;
    })
  }

  deleteItem(productId: number)
  {
    this.cartItem = this.cartItem.filter(cartItem => cartItem.product.id != productId)
  }

  getTotalPrice()
  {
    return this.cartItem.reduce((total, cartItem) => total+ (cartItem.product.price * cartItem.quantity), 0);
  }
}

