import ChartJSData from '../Models/ChartJSData';

/*
 * IDataSource interface - need to be implemented by all the DataSource classes
 * used for the Chart web part, such as MockDataSource, SharePointDataSource, and
 * ExcelDataSource
 */
export interface IDataSource {
    getData():ChartJSData;
    
}