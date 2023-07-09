import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: { color: 'white' }}},
    elements: {
      arc: { borderWidth: 4, borderColor: '#232132' }}};

  public pieChartLabels = [ [ '	Avatar' ], [ 'Endgame' ], ['Titanic'] ];
  public pieChartDatasets = [ {
    data: [ 2.92, 2.79, 2.26 ], backgroundColor: ['#968fffa6', '#ea8fff8a', '#35d1a98c']
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}

}
