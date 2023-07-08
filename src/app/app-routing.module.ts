import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { FeaturesChartComponent } from './features-chart/features-chart.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

const routes: Routes = [
  { path:'bar-chart', component:BarChartComponent },
  { path:'bubble-chart', component:BubbleChartComponent },
  { path:'doughnut-chart', component:DoughnutChartComponent },
  { path:'features-chart', component:FeaturesChartComponent },
  { path:'financial-chart', component:FinancialChartComponent },
  { path:'line-chart', component:LineChartComponent },
  { path:'pie-chart', component:PieChartComponent },
  { path:'polar-area-chart', component:PolarAreaChartComponent },
  { path:'radar-chart', component:RadarChartComponent },
  { path:'scatter-chart', component:ScatterChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
