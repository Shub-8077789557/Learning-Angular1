import {LoginService} from './../login.service';
import {ProductService} from './../product.service';

export function ProductFactory( login : LoginService){
  return new ProductService(login.isLogin);
}

export const ProductFactoryProvider ={
    provide : ProductService,
    useFactory : ProductFactory,
    deps : [LoginService]
}