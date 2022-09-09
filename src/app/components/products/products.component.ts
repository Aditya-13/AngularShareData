import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../../transfer.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isApiCall : boolean = true
  details : boolean = false
  employees : object = {}
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
      this.isApiCall = false
      this.product = prod["products"]
    })
  }
  
  sendData(prod : object){
    this.details = true;
    this.employees = prod
    console.log(prod)
    // this.router.navigate(['/product-details'])
    // this.data.setProductsData(prod)
  }

  returnToHome(){
    this.details = false;
  }

}
