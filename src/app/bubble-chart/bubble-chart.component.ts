import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent {

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
  public bubbleChartLegend = true;

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

  constructor() {
  }

}
