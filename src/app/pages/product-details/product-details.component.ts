import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../model/products';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../service/master.service';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf,CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product!: Products ;

  
    private route: ActivatedRoute=inject(ActivatedRoute);
    private masterService: MasterService=inject(MasterService);
    
  

  ngOnInit(): void {

    this.masterService.getProductById(this.route.snapshot.params['id']).subscribe(
      (data:any) => this.product=data[0]
    )
  }
  
} 
