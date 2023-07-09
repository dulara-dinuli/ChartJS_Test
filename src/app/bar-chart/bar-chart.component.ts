import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      { data: [ 329.9, 317.3, 346.7, 407.0, 404.0 ], label: 'Sales of Non-Fiction', backgroundColor: ['#00997b'], borderColor:'#00997b' },
      { data: [ 359.0, 359.9, 390.7, 401.9, 360.0 ], label: 'Sales of Fiction', backgroundColor: ['#705fa6a8'], borderColor:'#705fa6a8' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: true,
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

  constructor() {}
  
}
