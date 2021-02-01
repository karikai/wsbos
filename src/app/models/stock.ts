export class Stock {
  ticker: string;
  companyName: string;
  index: string;
  shortable: boolean;
  optionable: boolean;
  annualSales: number;
  annualIncome: number;
  dividend: number;
  employees: number;
  week52High: number;
  week52Low: number;
  pe: number;
  sma20: number;
  sma50: number;
  sma200: number;
  price: number;
  volume: number;
  prevClose: number;
  open: number;
  marketCap: number;
  sector: string;
  industry: string;
  ceo: string;
  city: string;
  state: string;
  country: string;
  founded: string;

  static objectToStock(tempObject): Stock {
    const stock = new Stock();

    stock.ticker = tempObject.ticker;
    stock.companyName = tempObject.companyName;
    stock.index = tempObject.index;
    stock.shortable = tempObject.shortable;
    stock.optionable = tempObject.optionable;
    stock.annualSales = tempObject.annualSales;
    stock.annualIncome = tempObject.annualIncome;
    stock.dividend = tempObject.dividend;
    stock.employees = tempObject.employees;
    stock.week52High = tempObject.week52High;
    stock.week52Low = tempObject.week52Low;
    stock.pe = tempObject.pe;
    stock.sma20 = tempObject.sma20;
    stock.sma50 = tempObject.sma50;
    stock.sma200 = tempObject.sma200;
    stock.price = tempObject.price;
    stock.volume = tempObject.volume;
    stock.prevClose = tempObject.prevClose;
    stock.open = tempObject.open;
    stock.marketCap = tempObject.marketCap;
    stock.sector = tempObject.sector;
    stock.industry = tempObject.industry;
    stock.ceo = tempObject.ceo;
    stock.city = tempObject.city;
    stock.state = tempObject.state;
    stock.country = tempObject.country;
    stock.founded = tempObject.founded;
    return stock;
  }

}
