import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../constants';
import { timeout, map, catchError } from 'rxjs/operators';
import { product } from '../interfaces/data'


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataService {
    private readonly API_URL = AppSettings.API_ENDPOINT;
    private readonly API_ARGUMENT = AppSettings.API_ARGUMENT;

    constructor(private httpClient: HttpClient) { }
    //Store Email ID  
    setEmail(email: string, systemTime: string, price: string, mealType: string, itemName: string) {
        return this.httpClient.post(this.API_URL + 'emailInfo', JSON.stringify({ "email": email, "systemTime": systemTime, "price": price, "mealType": mealType, "name": itemName }), httpOptions);
    }
    getEmail() {
        return this.httpClient.get<product[]>(this.API_URL + 'emailInfo', httpOptions);
    }
    //Breakfast
    getbreakFast() {
        return this.httpClient.get<product[]>(this.API_URL + 'breakfast', httpOptions);
    }
    //Breakfast
    getLunch() {
        return this.httpClient.get<product[]>(this.API_URL + 'lunch', httpOptions);
    }
    //Breakfast
    getdinner() {
        return this.httpClient.get<product[]>(this.API_URL + 'dinner', httpOptions);
    }

    //Individual item details
    getItemRecipe(id: number, mealType: string) {
       // return this.httpClient.get<product[]>(this.API_URL + 'breakfast/' + id, httpOptions);
        return this.httpClient.get<product[]>(this.API_URL + mealType + '/' + id, httpOptions);
    }
}
