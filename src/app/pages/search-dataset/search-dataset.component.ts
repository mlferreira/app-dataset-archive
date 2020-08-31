import { Component, OnInit } from '@angular/core';
import { Dataset } from '../shared/dataset/dataset.model';
import { DatasetService } from '../shared/dataset/dataset.service';

@Component({
  selector: 'app-search-dataset',
  templateUrl: './search-dataset.component.html',
  styleUrls: ['./search-dataset.component.scss']
})
export class SearchDatasetComponent implements OnInit {

  datasets: Dataset[];

  constructor(
    private datasetService: DatasetService
  ) { }

  ngOnInit(): void {
    this.datasetService.getHomeDatasets().subscribe(
      res => {
        this.datasets = res;
      }
    );
  }

}
