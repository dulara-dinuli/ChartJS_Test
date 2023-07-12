import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BarChart } from '../chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  
  ngOnInit(): void { this.dynamicBarChartData() } 

  constructor(private httpclient: HttpClient) {}

  public barChartLegend = true;
  public barChartPlugins = [];

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

  //Static Bar Chart
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      { data: [ 329.9, 317.3, 346.7, 407.0, 404.0 ], label: 'Sales of Non-Fiction', backgroundColor: ['#00997b'], borderColor:'#00997b' },
      { data: [ 359.0, 359.9, 390.7, 401.9, 360.0 ], label: 'Sales of Fiction', backgroundColor: ['#705fa6a8'], borderColor:'#705fa6a8' }
    ]
  };

  //Dynamic Bar Chart
  public dbarChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], 
        label: 'Prices of Cars',
        backgroundColor: ['#ffbb00c2'] },
    ]
  };

  dynamicBarChartData(){
    this.getCarPrices().subscribe((d:BarChart[])=>{
      console.log(d);
      d.forEach((type: BarChart) => {
        this.dbarChartData.datasets[0].data.push(type.price);
        this.dbarChartData.labels =  d.map((type: BarChart) => type.model);
        console.log(type);});
    }, error => {console.error(error);})
  }

  getCarPrices(): Observable<Array<BarChart>> {
    return this.httpclient
      .get(`https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/ChartData.json`)
      .pipe(map((data: any) => {
        const filteredData = data.filter((item: BarChart) => item.model && item.price);
        return filteredData as BarChart[];
      }));
  }
  
}
