import { Component, OnInit } from '@angular/core';
import { Dataset } from '../shared/dataset/dataset.model';
import { DatasetService } from '../shared/dataset/dataset.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datasets: Dataset[];

  constructor(
    private datasetService: DatasetService
  ) { }

  ngOnInit(): void {
    this.datasetService.getHomeDatasets().subscribe(
      datasets => {
        this.datasets = datasets;
      }
    );
  }

}
