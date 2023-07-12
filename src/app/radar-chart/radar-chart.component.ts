import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Observable, map } from 'rxjs';
import { RadarChart } from '../chart';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit{

  ngOnInit(): void { this.dynamicRadarChartData() } 

  constructor(private httpclient: HttpClient) {}

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

//Static Radar Chart  
  public radarChartLabels: string[] = ['Avg Temperature', 'Precipitation Levels', 'CO2 Emissions', 'Sea Level Rise', 'Arctic Ice Melting'];
  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [12.5, 10, 5.2, 3.2, 15], label: 'United States', backgroundColor: '#00997b5c', borderColor: '#00997b', 
    pointBackgroundColor: '#00997b', pointBorderColor: '#00997b'},
    { data: [27.5, 25, 50, 5, 29], label: 'Sri Lanka', backgroundColor: '#705fa65c', borderColor: '#705fa6a8', 
    pointBackgroundColor: '#705fa6a8', pointBorderColor: '#705fa6a8'}
  ];

//Dynamic Radar Chart  
public dradarChartLabels: String[] = [];
public dradarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
  { data: [], 
    label: 'Sri Lanka', 
    backgroundColor: '#2a9c1a8c', 
    borderColor: '#2a9c1a', 
    pointBackgroundColor: '#2a9c1a', 
    pointBorderColor: '#0d6e00'},
];

dynamicRadarChartData(){
  this.getProductAverage().subscribe((d:RadarChart[])=>{
  console.log(d);
  d.forEach((type: RadarChart) => {
    console.log(type);
    this.dradarChartDatasets[0].data = d.map((type: RadarChart) => type.avg);
    this.dradarChartLabels = d.map((type: RadarChart) => type.product);
   });
  }, error => {console.error(error);})
}

getProductAverage(): Observable<Array<RadarChart>> {
  return this.httpclient
  .get(`https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/ChartData.json`)
  .pipe(map((data: any) => {
    const filteredData = data.filter((item: RadarChart) => item.product && item.avg);
    return filteredData as RadarChart[];
  }));
}

}
