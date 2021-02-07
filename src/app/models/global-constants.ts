import { Filter } from "./filter";

export class FilterDataTypes {
    static numberType = 'number';
    static stringType = 'string';
    static booleanType = 'boolean';
}

export class FilterModes {
    static stockMode = 0;
    static optionMode = 1;
    static otherMode = 2;
}

export class FilterComparisons {
    static EQUALS = 0;
    static LESS_THAN = 1;
    static GREATER_THAN = 2;
}

export class StockFilterOptions {
    static options = [
        Filter.newFilter('Price', FilterDataTypes.numberType),
        Filter.newFilter('Previous Close', FilterDataTypes.numberType),
        Filter.newFilter('Market Cap', FilterDataTypes.numberType),
        Filter.newFilter('Volume', FilterDataTypes.numberType),
        Filter.newFilter('Open', FilterDataTypes.numberType),
        Filter.newFilter('Employees', FilterDataTypes.numberType),
        Filter.newFilter('P/E Ratio', FilterDataTypes.numberType),
        Filter.newFilter('Sector', FilterDataTypes.stringType),
        Filter.newFilter('Industry', FilterDataTypes.stringType),
        Filter.newFilter('SMA 20', FilterDataTypes.numberType),
        Filter.newFilter('SMA 50', FilterDataTypes.numberType),
        Filter.newFilter('SMA 200', FilterDataTypes.numberType),
    ]
}

export class OptionsFilterOptions {
    static options = [
        Filter.newFilter('Expiration Date', FilterDataTypes.numberType),
        Filter.newFilter('Option Type', FilterDataTypes.numberType),
        Filter.newFilter('Bid', FilterDataTypes.numberType),
        Filter.newFilter('Bid Amount', FilterDataTypes.numberType),
        Filter.newFilter('Ask', FilterDataTypes.numberType),
        Filter.newFilter('Ask Amount', FilterDataTypes.numberType),
        Filter.newFilter('Volume', FilterDataTypes.numberType),
        Filter.newFilter('Open Interest', FilterDataTypes.numberType),
        Filter.newFilter('Implied Volatility', FilterDataTypes.numberType),
        Filter.newFilter('Delta', FilterDataTypes.numberType),
        Filter.newFilter('Gamma', FilterDataTypes.numberType),
        Filter.newFilter('Theta', FilterDataTypes.numberType),
        Filter.newFilter('Vega', FilterDataTypes.numberType),
        Filter.newFilter('Rho', FilterDataTypes.numberType),
    ]
}

export class OthersFilterOptions {
    static options = [
        Filter.newFilter('Fake Filter', FilterDataTypes.numberType),
    ]
}
