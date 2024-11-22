import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../model/products';
import { MasterService } from '../../service/master.service';
import { BasketService } from '../../service/basket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent  implements OnInit{
  productList: Products[] = [];
  userBasket: Products[] = [];
  searchTerm: string = '';

  private masterService: MasterService = inject(MasterService);
  private basketService: BasketService = inject(BasketService);

  ngOnInit(): void {
    this.loadAllProducts();
    this.loadUserBasket();
  }

  loadAllProducts(): void {
    this.masterService.getAllProducts().subscribe((products) => {
      this.productList = products;
    });
  }

  deleteProduct(productId: string): void {
    this.masterService.deleteProduct(productId).subscribe(() => {
      alert('Product deleted successfully');
      this.loadAllProducts(); // Refresh the product list
    });
  }

  loadUserBasket(): void {
    this.userBasket = this.basketService.getCart();
  }

}
