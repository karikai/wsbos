import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import * as stocks from '../models/tickers.json';

@Injectable({
  providedIn: 'root'
})
export class APIService {
    static IEX_BASE_URL = 'https://cloud.iexapis.com/';
    static PRIVATE_KEY = 'pk_b4a363715c624a5f94f8a6d368d6c62f';
    static getQuoteRouteEnding(ticker) { return `stable/stock/${ticker}/quote?token=` }
    static getOptionsChainsRouteEnding(ticker) { return `stable/stock/${ticker}/options?token=` }
    static getOptionEnding(ticker, date, side) { return `stable/stock/${ticker}/options/${date}/${side}?token=` }
   
    
    static getAllStockTickers() : Array<Stock> {
        let stockList = [];
        //@ts-ignore
        (stocks.default).forEach((stock) => {
            let newStock = new Stock();
            newStock.ticker = stock['Symbol'];
            newStock.companyName = stock['Name'];
            newStock.sector = stock['Sector'];
            newStock.industry = stock['Industry'];

            stockList.push(newStock)
        })
        return stockList;
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

    static getLatestOptionChain(ticker: string) : Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let isError = false;
            let data = null;

            fetch(this.IEX_BASE_URL + APIService.getOptionsChainsRouteEnding(ticker) + APIService.PRIVATE_KEY)
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

    static getLatestOptionInformation(ticker) : Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let isError = false;
            let data = null;

            fetch(this.IEX_BASE_URL + APIService.getOptionsChainsRouteEnding(ticker) + APIService.PRIVATE_KEY)
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
    
    constructor() {}
}
