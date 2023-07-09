import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
// import { CandlestickController, CandlestickElement, OhlcController, OhlcElement, } from 'chartjs-chart-financial';

@Component({
  selector: 'app-financial-chart',
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.css']
})
export class FinancialChartComponent {

  // public financialChartData: ChartConfiguration['data'] = {
  //   datasets: [ {
  //     label: 'CHRT - Chart.js Corporation',
  //     data: this.getRandomData(this.initialDateStr, this.barCount)
  //   } ]
  // };

  // public financialChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   animation: false,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: {
  //       time: {
  //         unit: 'day'
  //       },
  //       adapters: {
  //         date: {
  //           locale: enUS
  //         }
  //       },
  //       ticks: {
  //         source: 'auto'
  //       }
  //     }
  //   },
  //   borderColor: 'black',
  //   backgroundColor: 'rgba(255,0,0,0,0.3)',
  //   plugins: {
  //     legend: {
  //       display: true
  //     }
  //   }
  // };

  // public financialChartType: ChartType = 'candlestick';

  constructor() {}

}
