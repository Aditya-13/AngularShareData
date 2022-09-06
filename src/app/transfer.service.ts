import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class TransferService {

  private sharedData = new BehaviorSubject<any>('');

  sharedData$ = this.sharedData.asObservable();

  constructor(private http : HttpClient) { }

  getProductsData(){
   return (this.http.get<any>('https://dummyjson.com/products'))
  }

  setProductsData(value : object){
    this.sharedData.next(value)
  }
}
