import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, delay, throwError, catchError} from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
    providedIn: 'root'
}) 

export class ProductService {
    constructor(
        private http: HttpClient) {
    }

    products: IProduct[] = []

getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
        fromObject: {limit: 5}
        })
    }).pipe(
        delay (200),
        catchError (this.errorHandler)
    )
}


private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message)
}
}