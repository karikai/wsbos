import { Component, OnInit, ViewChild } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { OptionsFilterOptions, OthersFilterOptions, StockFilterOptions, FilterModes } from 'src/app/models/global-constants';
import { Stock } from 'src/app/models/stock';
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
  // Stock/Option Variables
  stocks: Array<Stock> = [];
  activeStocks: Array<Stock> = [];
  activeFilters: Array<Filter> = [];
  // Filtering Variables
  filterConstants = FilterModes;
  filterMode = FilterModes.stockMode;
  stockFilters: Array<Filter> = StockFilterOptions.options;
  optionsFilters: Array<Filter> = OptionsFilterOptions.options;
  otherFilters: Array<Filter> = OthersFilterOptions.options;

  constructor() {
    this.stocks = APIService.getAllStockTickers().slice(0,19);
    this.getStockInfo()
    .then((doneGettingStockInfo) => {
      if (doneGettingStockInfo) {
        // this.getOptionsInfo()
        // .then((res) => {
          this.isLoaded = true;
        // })
      }
    })
   
  }

  ngOnInit() {

  }

  addFilter(filterValue) {
    if (filterValue !== null) {
      this.activeFilters.push()
    }

    this.disableTopWindow();
  }

  changeFilterMode(mode) {
    this.filterMode = mode;
  }

  getStockInfo() : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      for (let index = 0; index < this.stocks.length; index++) {
        APIService.getLatestStockPrice(this.stocks[index].ticker)
        .then((info) => {
          console.log(info)
          if (info !== null) {
            this.stocks[index].price = info['latestPrice']
            this.stocks[index].prevClose = info['previousClose']
            this.stocks[index].week52High = info['week52High']
            this.stocks[index].week52Low = info['week52Low']
            this.stocks[index].marketCap = info['marketCap']
            this.stocks[index].volume = info['latestVolume']
            this.stocks[index].pe = info['peRatio']
          } else {
            // this.stocks[index] = null
          }
        })
        .catch((err) => {
            // this.stocks[index] = null
        })
      }
      resolve(true)
    })
  }

  getOptionChain() {

  }

  getOptionInfo() : Promise<boolean> {
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
