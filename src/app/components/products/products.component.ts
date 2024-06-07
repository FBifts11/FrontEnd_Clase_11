import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api.service.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: IProduct[] = []

  constructor(private _apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this._apiService.getAllProducts().subscribe({
      next: data => {
        console.log(data)
        this.productList = data
      }, error: error => {
        console.log(error)
      }
    });
  }

  deleteProduct(id: number | string) {
    this._apiService.deleteProduct(id).subscribe({  //Acuerdense que esta api lo borra de mentira!!!
      next: data => {
        this.getAllProducts()
        console.log(data)
        console.log(`El producto ${data.id} fue eliminado de la lista`)
      }, error: error => {
        console.log(error)
      }
    })
  }

}
