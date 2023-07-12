import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Observable, map } from 'rxjs';
import { DoughnutChart } from '../chart';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit{

  ngOnInit(): void { this.dynamicDoughnutChartData() } 
  
  constructor(private httpclient: HttpClient){}
  
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }}},
    elements: {
      arc: { borderWidth: 4, borderColor: '#232132' }}};

//Static Doughnut Chart      
  public doughnutChartLabels: string[] = [ 'Won', 'Lose'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 408, 441], label: 'ODI', backgroundColor: ['#03660bb5', '#fa7b50b5']},
    { data: [ 79, 94], label: 'T20', backgroundColor: ['#03660bb5', '#fa7b50b5']},
    { data: [ 90, 107], label: 'Test', backgroundColor: ['#03660bb5', '#fa7b50b5']}
  ];

//Dynamic Doughnut Chart 
  public ddoughnutChartLabels: String[] = [];
  public ddoughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [], label: 'Harvest Avg', backgroundColor: ['#7be347b5', '#403906b5', '#186342b5', '#a17d00b5']},
  ];

  dynamicDoughnutChartData(){
    this.getProductAverage().subscribe((d:DoughnutChart[])=>{
    console.log(d);
    d.forEach((type: DoughnutChart) => {
      console.log(type);
      this.ddoughnutChartDatasets[0].data = d.map((type: DoughnutChart) => type.avg);
      this.ddoughnutChartLabels = d.map((type: DoughnutChart) => type.product);
     });
    }, error => {console.error(error);})
  }

  getProductAverage(): Observable<Array<DoughnutChart>> {
    return this.httpclient
    .get(`https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/ChartData.json`)
    .pipe(map((data: any) => {
      const filteredData = data.filter((item: DoughnutChart) => item.product && item.avg);
      return filteredData as DoughnutChart[];
    }));
  }
 
}
