import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent {

  public polarAreaChartLabels: string[] = [ 'Coal', 'Natural Gas', 'Renewable Energy', 'Nuclear Power', 'Oil' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 1038, 1325, 776, 807, 935 ],
    backgroundColor:['#5473cf54', '#54cf8e78', '#cf54ca78', '#cfbe5478', '#cf545478'],
    borderColor: ['#5473cf', '#54cf8e', '#cf54ca', '#cfbe54', '#cf5454'] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }}},
    elements: {
      arc: { borderWidth: 2 }},
      scales: {
        r: {
          grid: { color: '#a8a8a81f' },
          ticks: { color: 'white', backdropColor: 'transparent' }}}};

  constructor() {
  }

}
