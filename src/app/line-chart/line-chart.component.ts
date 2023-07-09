import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent{

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Sri Lanka',
      'India',
      'US',
      'UK',
      'Japan',
      'Germany',
      'Italy'
    ],
    datasets: [
      {
        data: [ 1.51, 326.6, 168.6, 33.5, 54.7, 33.8, 30.3 ],
        label: 'Instagram',
        fill: false,
        tension: 0.5,
        borderColor: '#ff4f52',
        backgroundColor: '#ff4f527e',
        pointBackgroundColor: '#ff4f52' 
      },
      {
        data: [ 7.69, 416.6, 240, 44, 55.8, 37.4, 34.9 ],
        label: 'Facebook',
        fill: false,
        tension: 0.5,
        borderColor: '#fffa69',
        backgroundColor: '#f6ff4f64',
        pointBackgroundColor: '#fffa69' 
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
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

  public lineChartLegend = true;

  constructor() {}

}
