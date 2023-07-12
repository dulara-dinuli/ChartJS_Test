import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BubbleChart } from '../chart';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit{

  ngOnInit(): void { this.dynamicBubbleChartData() } 

  constructor(private httpclient: HttpClient) {}

  public bubbleChartLegend = true;

  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }}},
    scales: {
      x: {
        min: 70,
        max: 100,
        grid: { color: '#a8a8a81f' },
        ticks: { color: 'white'}
      },
      y: {
        min: 70,
        max: 100,
        grid: { color: '#a8a8a81f' },
        ticks: { color: 'white'}
      }
    }
  };

//Static Bubble Chart Data
  public bubbleChartDatasets: ChartConfiguration<'bubble'>['data']['datasets'] = [
    {
      data: [
        { x: 92, y: 95, r:2 },
      ],
      label: 'Sri Lanka',
      backgroundColor: ['#ffc994bf'],
      borderColor: '#ffc994'
    },
    {
      data: [
        { x: 98, y: 90, r: 8 },
      ],
      label: 'United States',
      backgroundColor: ['#a2ff94bf'],
      borderColor: '#a2ff94'
    },
    {
      data: [
        { x: 99, y: 96, r: 6 },
      ],
      label: 'United Kingdom',
      backgroundColor: ['#94caffbf'],
      borderColor: '#94caff'
    },
    {
      data: [
        { x: 75, y: 80, r: 10 },
      ],
      label: 'India',
      backgroundColor: ['#f894ffbf'],
      borderColor: '#f894ff'
    },
    {
      data: [
        { x: 99, y: 95, r: 7 },
      ],
      label: 'Germany',
      backgroundColor: ['#ff94aebf'],
      borderColor: '#ff94ae'
    },
  ];

//Static Bubble Chart Data
public dbubbleChartDatasets: ChartConfiguration<'bubble'>['data']['datasets'] = [
  {
    data: [],
    label: 'Sample Data',
    backgroundColor: ['#ffc43e70'],
    borderColor: '#ffc43e'
  }
];

dynamicBubbleChartData() {
  this.getSampleData().subscribe((data: BubbleChart[]) => {
    console.log(data);
    const dynamicData = data.map((item: BubbleChart) => ({
      x: item.x,
      y: item.y,
      r: item.r
    }));
    this.dbubbleChartDatasets[0].data = dynamicData;
  }, error => {
    console.error(error);
  });
}

getSampleData(): Observable<Array<BubbleChart>> {
  return this.httpclient
    .get(`https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/ChartData.json`)
    .pipe(map((data: any) => {
      const filteredData = data.filter((item: BubbleChart) => item.x && item.y && item.r);
      return filteredData as BubbleChart[];
    }));
}

}
