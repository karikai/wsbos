export class Filter {
  filterName: string;
  filterComparison: string;
  filterDataType: string;
  filterValue: string;

  constructor() {

  }

  static objectToFilter(tempObject): Filter {
    const filter = new Filter();

    filter.filterName = tempObject.filterName;
    filter.filterDataType = tempObject.filterDataType;
    filter.filterValue = tempObject.filterValue;
    return filter;
  }

  static newFilter(name, type) : Filter {
    const filter = new Filter();

    filter.filterName = name;
    filter.filterDataType = type;

    return filter;
  }
}
