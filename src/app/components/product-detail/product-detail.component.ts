import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../services/api.service.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  
  product?: IProduct
  loading: boolean = true

  constructor(
    private _route:ActivatedRoute,
    private _apiService:ApiServiceService
  ){}
  
  
  ngOnInit(): void {
    this._route.params.subscribe({
      next: params => {
        this._apiService.getProductByid(params['productId']).subscribe({
          next: data => {
            this.product = data
            this.loading = false
          }, error:error => {
            console.log(error)
          }
        })
      }, error:error => {
        console.log(error)
      }
    })
  }

}
