import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation'; //npm install chartjs-plugin-annotation

@Component({
  selector: 'app-features-chart',
  templateUrl: './features-chart.component.html',
  styleUrls: ['./features-chart.component.css']
})
export class FeaturesChartComponent {

  constructor() { Chart.register(Annotation)}

  private newLabel? = 'New Lable Name';
  private newColor: any = `#00ff004d`;
  private newBorderColor: any = 'green';
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4}},
    scales: {
      x: {
        grid: { color: '#a8a8a81f' },
        ticks: { color: 'orange'}},
      y: {
        grid: { color: '#a8a8a81f' },
        ticks: { color: '#dbdbdb' }}

      // y1: { position: 'right',
      //       grid: { color: 'rgba(255,0,0,0.3)',},
      //       ticks: { color: 'red'}}
          },
    plugins: {
      legend: { display: true,  labels: { color: '#dbdbdb' } },
      annotation: {
        annotations: [
          { type: 'line',
            scaleID: 'x',
            value: 'Data 3',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
            display: true,
              position: 'center',
              color: 'orange',
              content: 'Annotation Line',
              font: { weight: 'bold' }}},],}}
  };


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 22, 27, 7, 34, 13, 50, 42 ],
        label: 'Label A',
        backgroundColor: '#3c4ac973',
        borderColor: '#3c4ac9',
        pointBackgroundColor: '#47287073',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#121119dd',
        fill: 'origin',
      },
      {
        data: [ 48, 31, 44, 41, 6, 35, 27 ],
        label: 'Label B',
        backgroundColor: '#a6149673',
        borderColor: '#a61496',
        pointBackgroundColor: '#59595973',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#121119dd',
        fill: 'origin',
      },
      {
        data: [ 15, 76, 32, 29, 71, 45, 4 ],
        label: 'Label C',
        // yAxisID: 'y1',
        backgroundColor: '#ff370073',
        borderColor: '#ff3700',
        pointBackgroundColor: '#ff690073',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#121119dd',
        fill: 'origin',
      }
    ],
    labels: [ 'Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7' ]
  };

  private static randomNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 50 : 100)) + 1);
  }

  public randomData(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = FeaturesChartComponent.randomNumber(i);
      }
    }
    this.chart?.update();
  }


  public click({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public hover({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public showHide(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public add(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = FeaturesChartComponent.randomNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(`Data ${ this.lineChartData.labels.length+1}`);

    this.chart?.update();
  }

  public colorChange(): void {
    const tmpColor = this.newColor;
    const tmpBorderColor = this.newBorderColor;
    this.newColor=this.lineChartData.datasets[2].backgroundColor;
    this.newBorderColor=this.lineChartData.datasets[2].borderColor;
    this.lineChartData.datasets[2].borderColor = tmpBorderColor;
    this.lineChartData.datasets[2].backgroundColor = tmpColor;

    this.chart?.update();
  }

  public labelChange(): void {
    const tmp = this.newLabel;
    this.newLabel = this.lineChartData.datasets[2].label;
    this.lineChartData.datasets[2].label = tmp;

    this.chart?.update();
  }
}
