import { Component, OnInit, ViewChild } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { OptionsFilterOptions, OthersFilterOptions, StockFilterOptions, FilterModes } from 'src/app/models/global-constants';
import { Option } from 'src/app/models/option';
import { Stock } from 'src/app/models/stock';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-options-scanner',
  templateUrl: './options-scanner.component.html',
  styleUrls: ['./options-scanner.component.css']
})
export class OptionsScannerComponent implements OnInit {
  isLoaded: boolean = false;
  isControlling: boolean = false;
  isConfiguring: boolean = false;
  // Stock/Option Variables
  stocks: Array<Stock> = [];
  activeStocks: Array<Stock> = [];
  activeOptions: Array<Option> = [];
  // Filtering Variables
  lastSelectedFilter: Filter;
  activeFilters: Array<Filter> = [];
  filterConstants = FilterModes;
  filterMode = FilterModes.stockMode;
  stockFilters: Array<Filter> = StockFilterOptions.options;
  optionsFilters: Array<Filter> = OptionsFilterOptions.options;
  otherFilters: Array<Filter> = OthersFilterOptions.options;

  constructor() {

  }

  ngOnInit() {
    this.initializeData();
  }

  // Initialize

  async initializeData() {
    this.stocks = APIService.getAllStockTickers().slice(14, 15);

    let doneGettingStockInfo = await this.getStockInfo()
    if (doneGettingStockInfo) {
      let doneGettingOptionChains = await this.getOptionChains()
      if (doneGettingOptionChains) {
        let doneGettingOptions = await this.getOptionInfo()
        if (doneGettingOptions) {
          this.activeOptions.sort((a,b) => { return b.volume - a.volume})
          this.isLoaded = true
        }
      }
    }
  }

  // Filtering Operations

  updateTable() {

  }


  // API Operations

  getStockInfo(): Promise<boolean> {
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
            }

            if (index === this.stocks.length - 1) {
              resolve(true)
            }
          })
      }
    })
  }

  getOptionChains(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      for (let index = 0; index < this.stocks.length; index++) {
        APIService.getLatestOptionChain(this.stocks[index].ticker)
          .then((info) => {
            this.stocks[index].chain = info;

            if (index === this.stocks.length - 1) {
              resolve(true)
            }
          })
      }
    })
  }

  getOptionInfo(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      for (let k = 0; k < this.stocks.length; k++) {
        const stock = this.stocks[k];
        for (let j = 0; j < 2; j++) {
          const chain = stock.chain[j];
          APIService.getLatestOptionInformation(stock.ticker, chain, 'call')
          .then((optionInfo) => {
            optionInfo.forEach(element => {
              console.log(element)
              let option = new Option();
              option.stock = stock;
              option.ask = element['ask']
              option.bid = element['bid']
              option.close = element['close']
              option.open = element['open']
              option.high = element['high']
              option.low = element['low']
              option.openInterest = element['openInterest']
              option.expirationDate = element['expirationDate']
              option.strike = element['strikePrice']
              option.volume = element['volume']
              this.activeOptions.push(option)
            });

            if (k === this.stocks.length - 1 && j === 2 - 1) {
              resolve(true)
            }
          })
        }
      }
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


// for (let index = 0; index < this.stocks.length; index++) {
//   for (let j = 0; j < this.stocks[index].chain.length; j++) {
//     const chain = this.stocks[index].chain[j];
//     APIService.getLatestOptionInformation(this.stocks[index].ticker, chain, 'call')
//       .then((info) => {
//         if (info) {
//           this.activeOptions.push(info)
//         }
//       })
//       .catch((err) => {

//       })
//   }
// }