import { Component, OnInit, Input } from '@angular/core';

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
