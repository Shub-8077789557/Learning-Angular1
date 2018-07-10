import {InjectionToken} from '@angular/core';
import {HttpConfig} from './httpconfig';
export const HTTP_CONFIG = new InjectionToken<HttpConfig>('httpconfig.service');
export const API_CONFIG : HttpConfig = {
   apiendpoint : 'http://jsonplaceholder.typicode.com/',
   pagesize : 10,
   token : 'SHOPAPP1012'
}
export class  HttpconfigService {


}