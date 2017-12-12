import {IDataSource} from './IDataSource';
import ChartJSData from '../Models/ChartJSData';

import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class MockDataSource implements IDataSource {

    public getData():ChartJSData {

        const chartJSData = new ChartJSData();
        chartJSData.dataSetLabel = "Sample data set";
        chartJSData.dataLabels = ["Group 1", "Group 2", "Group3", "Group 4", "Group 5"];
        chartJSData.dataValues = [45, 67, 34,57, 49];
        chartJSData.dataColors = [ "#FF6384", "#4BC0C0", "#FFCE56", "#82E0AA", "#36A2EB"];

        return chartJSData;
    }

}