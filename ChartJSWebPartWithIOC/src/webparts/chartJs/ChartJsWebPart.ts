import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';

import * as strings from 'chartJsStrings';
import ChartJs, { IChartJsProps } from './components/ChartJs';
import { IChartJsWebPartProps } from './IChartJsWebPartProps';

export default class ChartJsWebPart extends BaseClientSideWebPart<IChartJsWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
    
  }

  public render(): void {
    const element: React.ReactElement<IChartJsProps> = React.createElement(ChartJs, {
      chartType: this.properties.chartType
    });

    ReactDom.render(element, this.domElement);
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('chartType', {
                  label: 'Chart Type',
                    options: [
                      { key: 'bar', text: 'Bar' },
                      { key: 'pie', text: 'Pie' },
                      { key: 'doughnut', text: 'Doughnut' },
                      { key: 'polarArea', text: 'PolarArea'}
                  ]})
              ]
            }
          ]
        }
      ]
    };
  }
}
