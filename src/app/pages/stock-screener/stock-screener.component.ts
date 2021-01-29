import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stock-screener',
  templateUrl: './stock-screener.component.html',
  styleUrls: ['./stock-screener.component.css']
})
export class StockScreenerComponent implements OnInit {
  @ViewChild('overlay')
  isLoaded = false;
  stocks = [];
  stockData = [];

  constructor() {
    //@ts-ignore
    this.stocks = APIService.getAllStockTickers().default;
    this.getInfo().then((result) => {
      if (result) {
        this.isLoaded = true
      }
    })
   
  }

  getInfo() : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      for (let index = 0; index < this.stocks.length; index++) {
        let stock = this.stocks[index]
        let stockInfo = null
        APIService.getLatestStockPrice(stock['ACT Symbol']).then((info) => {
          if (info !== null) {
            stockInfo = info
          } else {
            stockInfo['latestPrice'] = 'n/a'
            stockInfo['change'] = 'n/a'
          }
          this.stockData[index] = stockInfo
        })
      }
      resolve(true)
    })
  }

  ngOnInit() {

  }
}
