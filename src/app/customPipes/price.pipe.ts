import { Pipe, PipeTransform } from '@angular/core';
import {NewProducts} from '../newproduct/newproducts';
@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: NewProducts[], price: number): any {
    console.log(value);
    return value.filter((data) => data.ProductPrice > price);
  }

}
