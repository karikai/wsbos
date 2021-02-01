export class Filter {
  filterName: string;
  filterDataType: string;
  filterValue: string;

  static objectToFilter(tempObject): Filter {
    const filter = new Filter();

    filter.filterName = tempObject.filterName;
    filter.filterDataType = tempObject.filterDataType;
    filter.filterValue = tempObject.filterValue;
    return filter;
  }

}
