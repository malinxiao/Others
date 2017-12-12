declare interface IChartJsStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'chartJsStrings' {
  const strings: IChartJsStrings;
  export = strings;
}
