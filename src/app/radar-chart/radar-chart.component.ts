import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }}},
        scales: {
          r: {
            grid: { color: '#a8a8a81f' },
            pointLabels: { color: 'white' },
            ticks: { color: 'white', backdropColor: 'transparent',  stepSize: 10 }}}
  };

  public radarChartLabels: string[] = ['Avg Temperature', 'Precipitation Levels', 'CO2 Emissions', 'Sea Level Rise', 'Arctic Ice Melting'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [12.5, 10, 5.2, 3.2, 15], label: 'United States', backgroundColor: '#00997b5c', borderColor: '#00997b', 
    pointBackgroundColor: '#00997b', pointBorderColor: '#00997b'},
    { data: [27.5, 25, 50, 5, 29], label: 'Sri Lanka', backgroundColor: '#705fa65c', borderColor: '#705fa6a8', 
    pointBackgroundColor: '#705fa6a8', pointBorderColor: '#705fa6a8'}
  ];

  constructor() {
  }

}
