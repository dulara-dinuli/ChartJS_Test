import { Component } from '@angular/core';
import { ChartConfiguration, ScatterDataPoint } from 'chart.js';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent {

  public scatterChartDatasets: ChartConfiguration<'scatter'>['data']['datasets'] = [
    {
      data: [
        { x: 365.7, y: 2457.5 }
      ],
      label: 'Apple Inc.',
      pointRadius: 10,
      backgroundColor: '#5473cf54',
      borderColor: '#5473cf'
    },
    {
      data: [
        { x: 143.0, y: 2150.6 }
      ],
      label: 'Microsoft',
      pointRadius: 10,
      backgroundColor: '#54cf8e78',
      borderColor: '#54cf8e'
    },
    {
      data: [
        { x: 386.1, y: 1872.2 }
      ],
      label: 'Amazon',
      pointRadius: 10,
      backgroundColor: '#cf54ca78',
      borderColor: '#cf54ca'
    },
    {
      data: [
        { x: 85.9, y: 1008.5 }
      ],
      label: 'Facebook',
      pointRadius: 10,
      backgroundColor: '#cfbe5478',
      borderColor: '#cfbe54'
    },
    {
      data: [
        { x: 31.5, y: 631.6 }
      ],
      label: 'Tesla',
      pointRadius: 10,
      backgroundColor: '#cf545478',
      borderColor: '#cf5454'
    }
  ];

  public scatterChartOptions: ChartConfiguration<'scatter'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }}},
    scales: {
      x: {
        grid: { color: '#a8a8a81f' },
        ticks: { color: 'white'}},
      y: {
        grid: { color: '#a8a8a81f' },
        ticks: { color: 'white' }}}
  };

  constructor() {
  }

}
