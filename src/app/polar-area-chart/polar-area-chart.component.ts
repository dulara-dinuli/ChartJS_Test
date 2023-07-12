import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Observable, map } from 'rxjs';
import { PolarAreaChart } from '../chart';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit{

  ngOnInit(): void { this.dynamicPolarAreaChartData() } 

  constructor(private httpclient: HttpClient) {}

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

//Static Polar Area Chart
  public polarAreaChartLabels: string[] = [ 'Coal', 'Natural Gas', 'Renewable Energy', 'Nuclear Power', 'Oil' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 1038, 1325, 776, 807, 935 ],
    backgroundColor:['#5473cf54', '#54cf8e78', '#cf54ca78', '#cfbe5478', '#cf545478'],
    borderColor: ['#5473cf', '#54cf8e', '#cf54ca', '#cfbe54', '#cf5454'] }
  ];

//Dynamic Polar Area Chart
public dpolarAreaChartLabels: String[] = [];
public dpolarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
  { data: [],
  backgroundColor:['#00ff0970', '#4f42229c', '#236e4e9c', '#b5a5029c'],
  borderColor: ['#00ff09', '#4f4222', '#236e4e', '#b5a502'] }
];

dynamicPolarAreaChartData(){
  this.getProductAverage().subscribe((d:PolarAreaChart[])=>{
  console.log(d);
  d.forEach((type: PolarAreaChart) => {
    console.log(type);
    this.dpolarAreaChartDatasets[0].data = d.map((type: PolarAreaChart) => type.avg);
    this.dpolarAreaChartLabels = d.map((type: PolarAreaChart) => type.product);
   });
  }, error => {console.error(error);})
}

getProductAverage(): Observable<Array<PolarAreaChart>> {
  return this.httpclient
  .get(`https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/ChartData.json`)
  .pipe(map((data: any) => {
    const filteredData = data.filter((item: PolarAreaChart) => item.product && item.avg);
    return filteredData as PolarAreaChart[];
  }));
}

}
