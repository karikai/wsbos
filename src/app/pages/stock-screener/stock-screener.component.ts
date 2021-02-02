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
  // Filtering Variables
  lastSelectedFilter: Filter;
  activeFilters: Array<Filter> = [];
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
        this.getOptionChains()
        .then((res) => {
          console.log(this.stocks)
          this.isLoaded = true;
        })
      }
    })
  }

  ngOnInit() {

  }

  // API Operations

  getStockInfo() : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      for (let index = 0; index < this.stocks.length; index++) {
        APIService.getLatestStockPrice(this.stocks[index].ticker)
        .then((info) => {
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

  getOptionChains() : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      for (let index = 0; index < this.stocks.length; index++) {
        // if (this.stocks[index].isOptionable) {
          APIService.getLatestOptionChain(this.stocks[index].ticker)
          .then((info) => {
            this.stocks[index].chain = info;
          }) 
        // }
      }
      resolve(true)
    })
  }

  getOptionInfo() : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      for (let index = 0; index < this.stocks.length; index++) {
        APIService.getLatestOptionInformation(this.stocks[index].ticker)
        .then((info) => {
        })
      }
      resolve(true)
    })
  }

  // View Controller Functions

  openControls() {
    this.isControlling = true;
  }

  openConfiguration(filter) {
    this.lastSelectedFilter = filter;
    this.isConfiguring = true;
  }

  disableTopWindow() {
    if (this.isConfiguring) {
      this.isConfiguring = false;
    } else {
      this.isControlling = false
    }
  }

  addFilter() {
    if (this.lastSelectedFilter !== null) {
      this.activeFilters.push(this.lastSelectedFilter)
    }

    this.disableTopWindow();
  }

  changeFilterMode(mode) {
    this.filterMode = mode;
  }
}
