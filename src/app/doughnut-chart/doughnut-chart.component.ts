import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  public doughnutChartLabels: string[] = [ 'Won', 'Lose'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 408, 441], label: 'ODI', backgroundColor: ['#35d1a9ba', '#ffc994bf']},
      { data: [ 79, 94], label: 'T20', backgroundColor: ['#35d1a9ba', '#ffc994bf']},
      { data: [ 90, 107], label: 'Test', backgroundColor: ['#35d1a9ba', '#ffc994bf']}
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }}},
    elements: {
      arc: { borderWidth: 4, borderColor: '#232132' }}};

  constructor(){}
}
