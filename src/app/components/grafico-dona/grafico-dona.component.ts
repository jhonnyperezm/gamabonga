import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() pieChartLabels: Label[] = [];
  @Input() pieChartData: number[] = [];
  @Input() pieChartType: ChartType = '';

  constructor() { }

  ngOnInit() {
  }

}
