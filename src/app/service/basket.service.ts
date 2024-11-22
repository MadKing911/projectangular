import { Injectable } from '@angular/core';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private cartKey = 'userCart';

  constructor() {}
  private cart: Products[] = [];

  getCart() {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(product: any) {
    const cart = this.getCart();
    cart.push(product); // Add product to cart
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  clearCart() {
    localStorage.removeItem(this.cartKey);
  }
  getCartCount() {
    return this.getCart().length;
  }

  removeFromCart(product: Products): void {
    // Load the cart from LocalStorage
    this.cart = this.getCart();

    // Filter out the product to remove
    this.cart = this.cart.filter(item => item.objectID !== product.objectID);

    // Save the updated cart back to LocalStorage
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
}



}
