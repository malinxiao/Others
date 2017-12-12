import * as React from 'react';
import { css } from 'office-ui-fabric-react';

import styles from '../ChartJs.module.scss';
import { IChartJsWebPartProps } from '../IChartJsWebPartProps';

//import Chart.js library
const jsChart = require("jsChart");

//import the ChartJS DTO
import ChartJSData from '../Models/ChartJSData';

import kernel from '../InversionOfControl/inversify.config';

//import the mock data source
import {IDataSource} from '../Services/IDataSource';

export interface IChartJsProps extends IChartJsWebPartProps {
  chartType:string;
}

export default class ChartJs extends React.Component<IChartJsProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={styles.chartJs}>
        <div className={styles.container}>
            <canvas id="spfx-chart" ></canvas>
        </div>
      </div>
    );
  }
  
  //render chart after the page is loaded
  public componentDidMount(): void {
    this.renderChart();
  }

  //render chart after the chart type is changed on the web part property panel
  public componentDidUpdate(): void {
    this.renderChart();
  }
  
  //method to render the Chart.js chart using the data read from the data source
  private renderChart():void {

    //read data from the data source
    const dataSource = kernel.get<IDataSource>("IDataSource");
    const chartJSData:ChartJSData = dataSource.getData();

    //create the chart.js instance 
    const ctx = document.getElementById("spfx-chart");
    const chart = new jsChart(ctx,{
      type: this.props.chartType,
      data: {
        labels: chartJSData.dataLabels,
        datasets: [
            {
              label:chartJSData.dataSetLabel,
              data: chartJSData.dataValues,
              backgroundColor: chartJSData.dataColors
            }
        ]
      }
    });
  }

}
