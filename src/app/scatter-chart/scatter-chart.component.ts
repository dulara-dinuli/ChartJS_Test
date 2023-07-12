import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ScatterDataPoint } from 'chart.js';
import { Observable, map } from 'rxjs';
import { ScatterChart } from '../chart';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit{

  ngOnInit(): void { this.dynamicScatterChartData() } 

  constructor(private httpclient: HttpClient) {}

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

 //Static Scatter Chart 
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

//Dynamic Scatter Chart 
public dscatterChartDatasets: ChartConfiguration<'scatter'>['data']['datasets'] = [
  {
    data: [],
    label: 'Sample Data',
    pointRadius: 10,
    backgroundColor: '#89009970',
    borderColor: '#890099'
  },
];

dynamicScatterChartData() {
  this.getSampleData().subscribe((data: ScatterChart[]) => {
    console.log(data);
    const dynamicData = data.map((item: ScatterChart) => ({
      x: item.x,
      y: item.y
    }));
    this.dscatterChartDatasets[0].data = dynamicData;
  }, error => {
    console.error(error);
  });
}

getSampleData(): Observable<Array<ScatterChart>> {
  return this.httpclient
    .get(`https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/ChartData.json`)
    .pipe(map((data: any) => {
      const filteredData = data.filter((item: ScatterChart) => item.x && item.y);
      return filteredData as ScatterChart[];
    }));
}

}
