import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dataset } from '../dataset.model';
import { NbDialogService } from '@nebular/theme';
import { CreateEntryModalComponent } from '../../entry/create-entry-modal/create-entry-modal.component';
import { DatasetService } from '../dataset.service';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.scss']
})
export class DatasetDetailComponent implements  OnInit {

  dataset: Dataset;

  constructor(
    private route: ActivatedRoute,
    private dialogService: NbDialogService,
    private datasetService: DatasetService
  ){}

  ngOnInit(): void {
    this.route.data.subscribe(data => this.dataset = data.dataset);
  }

  openContributeModal() {
    this.dialogService.open(CreateEntryModalComponent, {
      context: {
        title: 'Create Contribution',
        contributionQuestion: this.dataset.contributionQuestion,
        datasetId: this.dataset.id
      }
    });
  }

  downloadDataset() {
    console.log(this.dataset.downloadLink)
    this.datasetService.downloadDataset(this.dataset.downloadLink)
  }

}
