import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../../transfer.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: any
  
  constructor(
    private data : TransferService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.data.getProductsData().subscribe(prod => {
      this.product = prod["products"]
    })
  }
  
  sendData(prod : object){
    this.data.setProductsData(prod)
    this.router.navigate(['/product'])
  }

}
