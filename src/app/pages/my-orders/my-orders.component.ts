import { Component, inject, OnInit } from '@angular/core';
import { BasketService } from '../../service/basket.service';
import { Products } from '../../model/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit {
  cartItems: Products[] = [];
  cartCount: number = 0;

  private basketService: BasketService = inject(BasketService);

  ngOnInit(): void {
    this.cartCount = this.basketService.getCartCount(); // Get initial cart count
    this.cartItems = this.basketService.getCart(); // Load cart items
  }

  removeFromCart(product: Products): void {
    this.basketService.removeFromCart(product); // Remove the product
    this.cartItems = this.basketService.getCart(); // Reload the updated cart
    this.cartCount = this.cartItems.length; // Update the cart count
}

}
