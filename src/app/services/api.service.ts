import { Injectable } from '@angular/core';
import * as stocks from '../models/tickers.json'

@Injectable({
  providedIn: 'root'
})
export class APIService {
    static IEX_BASE_URL = 'https://cloud.iexapis.com/';
    static PRIVATE_KEY = 'pk_fc4857bc809645fb98c7bfa9132d259d ';
    static getQuoteRouteEnding(ticker) { return `stable/stock/${ticker}/quote?token=` }
   
    
    static getAllStockTickers() {
        return stocks;
    }

    static getLatestStockPrice(ticker: string) : Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let isError = false;
            let data = null;

            fetch(this.IEX_BASE_URL + APIService.getQuoteRouteEnding(ticker) + APIService.PRIVATE_KEY)
            .then((resp) => {
                data = resp.json();
            })
            .catch((err) => {
                if (err) {
                    isError = true;
                    console.log(err)
                }
            })
            .finally(() => {
                if (isError) {
                    reject(false)
                } else {
                    resolve(data)
                }
            })
        })
    }

    static getLatestStockInformation() : Promise<any> {
        return new Promise<any>((resolve, reject) => {
            fetch
        })
    }

    static getLatestOptionChain() : Promise<any> {
        return new Promise<any>((resolve, reject) => {
            fetch
        })
    }

    static getLatestOptionInformation() : Promise<any> {
        return new Promise<any>((resolve, reject) => {
            fetch
        })
    }
    
    constructor() {}
}
