import { Stock } from "./stock";

export class Option {
  ticker: string;
  expirationDate: string;
  optionType: string;
  strike: number;
  bid: number;
  bidAmount: number;
  ask: number;
  askAmount: number;
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  openInterest: number;
  impliedVolatility: number;
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho: number;
  stock: Stock;

  static objectToOption(tempObject): Option {
    const option = new Option();

    option.ticker = tempObject.ticker;
    option.expirationDate = tempObject.expirationDate;
    option.optionType = tempObject.optionType;
    option.bid = tempObject.bid;
    option.bidAmount = tempObject.bidAmount;
    option.ask = tempObject.ask;
    option.askAmount = tempObject.askAmount;
    option.high = tempObject.high;
    option.low = tempObject.low;
    option.volume = tempObject.volume;
    option.openInterest = tempObject.openInterest;
    option.impliedVolatility = tempObject.impliedVolatility;
    option.delta = tempObject.delta;
    option.gamma = tempObject.gamma;
    option.theta = tempObject.theta;
    option.vega = tempObject.vega;
    option.rho = tempObject.rho;
    return option;
  }

}
