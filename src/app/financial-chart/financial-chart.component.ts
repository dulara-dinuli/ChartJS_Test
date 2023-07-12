import { Component, ViewChild } from '@angular/core';
import 'chartjs-adapter-date-fns'; //npm install chartjs-adapter-date-fns
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { enUS } from 'date-fns/locale';
import { add, parseISO } from 'date-fns'; //npm install date-fns 
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement, } from 'chartjs-chart-financial'; //npm install chartjs-chart-financial


@Component({
  selector: 'app-financial-chart',
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.css']
})
export class FinancialChartComponent {

  constructor() {Chart.register(CandlestickController, OhlcController, CandlestickElement, OhlcElement);}

  public financialChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    animation: false,
    maintainAspectRatio: true,
    scales: {
      x: {
        time: { unit: 'day'},
        adapters: {
          date: { locale: enUS }},
        ticks: {
          source: 'auto',
          color: 'white' },
        grid: { color: '#a8a8a81f' }},
    y: {
      grid: { color: '#a8a8a81f' },
      ticks: { color: 'white' }}
    },
    borderColor: '#232132',
    backgroundColor: 'rgba(255,0,0,0,0.3)',
    plugins: {
      legend: {
        display: true,
        labels: { color: 'white' }}}
  };

  barCount = 60;
  initialDateStr = '2017-04-01T00:00:00';

//Static Financial Chart
public financialChartType: ChartType = 'candlestick'; 
public financialChartData: ChartConfiguration['data'] = {
  datasets: [ {
    label: 'Sample Data Set',
    data: [
      {x: 1491157800000, o: 30.540058675396804, h: 31.724867767946094, l: 27.522254633610665, c: 31.259602455029317},
      {x: 1491244200000, o: 28.045081787663932, h: 28.059277521951845, l: 25.905389694052893, c: 26.64473750314443},
      {x: 1491330600000, o: 26.337436299830994, h: 29.714906783887184, l: 23.9945665417192, c: 27.25187800342514},
      {x: 1491417000000, o: 27.255541692912008, h: 27.91087492447814, l: 24.309221652647164, c: 26.742040001194102},
      {x: 1491503400000, o: 26.28872657472469, h: 27.306752416828402, l: 24.595642489046618, c: 25.042740109915613},
      {x: 1491676200000, o: 24.68100081624784, h: 25.552155861838333, l: 22.168545089171353, c: 23.833662855283027},
      {x: 1491762600000, o: 25.02435723656483, h: 27.26371207193144, l: 23.0531559204987, c: 26.15493887559165}
    ]
  } ]
};

//Dynamic Financial Chart
  public dfinancialChartType: ChartType = 'ohlc';
  public dfinancialChartData: ChartConfiguration['data'] = {
    datasets: [ {
      label: 'Random Data Set',
      data: this.getRandomData(this.initialDateStr, this.barCount),
    } ]
  };

  randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  randomBar(date: Date, lastClose: number): { c: number; x: number; h: number; l: number; o: number } {
    const open = this.randomNumber(lastClose * 0.95, lastClose * 1.05);
    const close = this.randomNumber(open * 0.95, open * 1.05);
    const high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
    const low = this.randomNumber(Math.min(open, close) * 0.9, Math.min(open, close));
    return {
      x: +date,
      o: open,
      h: high,
      l: low,
      c: close
    };
  }

  getRandomData(dateStr: string, count: number): { c: number; x: number; h: number; l: number; o: number }[] {
    let date = parseISO(dateStr);
    const data = [ this.randomBar(date, 30) ];
    while (data.length < count) {
      date = add(date, { days: 1 });
      if (date.getDay() <= 5) {
        data.push(this.randomBar(date, data[data.length - 1].c));
        console.log(data);
      }
    }
    return data;
  }

}
