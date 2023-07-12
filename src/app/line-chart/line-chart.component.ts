import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LineChart } from '../chart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{

  ngOnInit(): void { this.dynamicLineChartData() } 
  
  constructor(private httpclient: HttpClient) {}

  public lineChartLegend = true;

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

//Static Line Chart
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

// Dynamic Line Chart
public dlineChartData: ChartConfiguration<'line'>['data'] = {
  labels: [],
  datasets: [
    {
      data: [],
      label: 'Prices of Cars',
      fill: true,
      tension: 0.5,
      borderColor: '#62bf35',
      backgroundColor: '#62bf3591',
      pointBackgroundColor: '#62bf35' 
    },
  ]
};

dynamicLineChartData(){
  this.getCarPrices().subscribe((d:LineChart[])=>{
    console.log(d);
    d.forEach((type: LineChart) => {
      this.dlineChartData.datasets[0].data.push(type.price);
      this.dlineChartData.labels =  d.map((type: LineChart) => type.model);
      console.log(type);});
  }, error => {console.error(error);})
}

getCarPrices(): Observable<Array<LineChart>> {
  return this.httpclient
    .get(`https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/ChartData.json`)
    .pipe(map((data: any) => {
      const filteredData = data.filter((item: LineChart) => item.model && item.price);
      return filteredData as LineChart[];
    }));
}

}
