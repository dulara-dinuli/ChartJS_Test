import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Observable, map } from 'rxjs';
import { PieChart } from '../chart';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{

  ngOnInit(): void { this.dynamicPieChartData() } 

  constructor(private httpclient: HttpClient) {}
  
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: { color: 'white' }}},
    elements: {
      arc: { borderWidth: 4, borderColor: '#232132' }}};

  // Static Pie Chart

  public pieChartLabels = [ [ '	Avatar' ], [ 'Endgame' ], ['Titanic'] ];
  public pieChartDatasets = [ {
    data: [ 2.92, 2.79, 2.26 ], backgroundColor: ['#968fffa6', '#ea8fff8a', '#35d1a98c']
  } ];

   // Dynamic Pie Chart

  public dpieChartLabels: String[] =[];
  public dpieChartDatasets: { labels: String[], data: number[], backgroundColor: string[] }[] = [{
  labels: this.dpieChartLabels,
  data: [], 
  backgroundColor: ['#aaff0091', '#662c3291', '#0b8c5a91', '#c49b0c91']
  }];

  dynamicPieChartData(){
    this.getProductAverage().subscribe((d:PieChart[])=>{
    console.log(d);
    d.forEach((type: PieChart) => {
      console.log(type);
      this.dpieChartDatasets[0].data = d.map((type: PieChart) => type.avg);
      this.dpieChartLabels = d.map((type: PieChart) => type.product);
     });
    }, error => {console.error(error);})
  }

  getProductAverage(): Observable<Array<PieChart>> {
    return this.httpclient
    .get(`https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/ChartData.json`)
    .pipe(map((data: any) => {
      const filteredData = data.filter((item: PieChart) => item.product && item.avg);
      return filteredData as PieChart[];
    }));
  }

}
