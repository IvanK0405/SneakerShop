import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductService } from "src/app/services/product.service";
import { IProduct } from "../../models/product"; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent implements OnInit {

  title = 'shop-proj';
  products: IProduct[];
  loading: boolean = false;
  products$: Observable<IProduct[]>

  constructor(
    private productsService: ProductService,
  ) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false;
    })
  }

}

