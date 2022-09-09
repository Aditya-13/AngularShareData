import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../../transfer.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() employees : any
  product : any
  constructor(
    private data : TransferService,
    private router : Router
  ) { }

  ngOnInit(): void {
    console.log(this.employees)
    // this.getProductDetails()
  }
  
  // getProductDetails(){
  //     this.data.sharedData$.subscribe(prod => {
  //       prod ? this.product = prod : this.router.navigate(['/'])
  //     })
  //     console.log(this.product)
  // }

}
