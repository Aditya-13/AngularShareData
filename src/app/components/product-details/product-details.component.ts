import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../../transfer.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : any
  constructor(
    private data : TransferService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getProductDetails()
  }
  
  getProductDetails(){
      this.data.sharedData$.subscribe(prod => {
        prod ? this.product = prod : this.router.navigate(['/'])
      })
      console.log(this.product)
  }

}
