import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stock-screener',
  templateUrl: './stock-screener.component.html',
  styleUrls: ['./stock-screener.component.css']
})
export class StockScreenerComponent implements OnInit {
  isLoaded = false;
  isControlling = false;
  isConfiguring = false;
  stocks = [];
  stockData = [];

  constructor() {
    //@ts-ignore
    this.stocks = APIService.getAllStockTickers().default;
    this.getInfo()
    .then((result) => {
      if (result) {
        console.log(result)
        this.getOptionsInfo()
        .then((res) => {
          this.isLoaded = true;
        })
      }
    })
   
  }

  ngOnInit() {

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

  getOptionsInfo() : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      for (let index = 0; index < this.stocks.length; index++) {
        let stock = this.stocks[index]
        let stockInfo = null
        console.log(stock)
        APIService.getLatestOptionChain(stock['ACT Symbol']).then((info) => {
          console.log(info)
        })
      }
      resolve(true)
    })
  }

  // to ensure all data is connected properly use a linked list to attach the options

  /*
    2. Create Test Data for options to use
    3. Implement saving configuration functionality
    4. Implement conversations on popular calls/puts which is publically accessible
  */

  openControls() {
    this.isControlling = true;
  }

  openConfiguration() {
    this.isConfiguring = true;
  }

  disableTopWindow() {
    if (this.isConfiguring) {
      this.isConfiguring = false;
    } else {
      this.isControlling = false
    }
  }
}
