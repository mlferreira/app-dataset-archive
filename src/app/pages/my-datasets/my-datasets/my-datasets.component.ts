import { Component, OnInit } from '@angular/core';
import { Dataset } from '../../shared/dataset/dataset.model';
import { DatasetService } from '../../shared/dataset/dataset.service';
import { DatePipe } from '@angular/common';
import { DetailButtonComponent } from '../../shared/dataset/dataset-detail/detail-button/detail-button.component';
import { DeleteButtonComponent } from '../../shared/dataset/delete-button/delete-button.component';
import { EditButtonComponent } from '../../shared/dataset/edit-button/edit-button.component';

@Component({
  selector: 'app-my-datasets',
  templateUrl: './my-datasets.component.html',
  styleUrls: ['./my-datasets.component.scss']
})
export class MyDatasetsComponent implements OnInit {

  datasets: Dataset[];

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    pager: {
      perPage: 7
    },
    columns: {
      detail: {
        title: 'Detail',
        type: 'custom',
        renderComponent: DetailButtonComponent,
        filter: false,
        width: '5%'
      },
      name: {
        title: 'Name',
        type: 'text',
      },
      description: {
        title: 'Description',
        type: 'text',
        valuePrepareFunction: (value: string) => {
          if (value.length > 40) {
            return value.substring(0, 40) + '...';
          }
          return value;
        }
      },
      tags: {
        title: 'Tags',
        type: 'text',
        valuePrepareFunction: (value: string[]) => {
          return value.slice(0, 2);
        },
        width: '15%'
      },
      status: {
        title: 'Status',
        type: 'text',
        width: '10%'
      },
      updateDate: {
        title: 'Last Update',
        type: 'text',
        valuePrepareFunction: (value: Date) => {
          return this.datePipe.transform(value, 'dd/MM/yyyy')
        },
        width: '10%'
      },
      edit: {
        title: 'Edit',
        type: 'custom',
        renderComponent: EditButtonComponent,
        filter: false,
        width: '5%'
      },
      delete: {
        title: 'Delete',
        type: 'custom',
        renderComponent: DeleteButtonComponent,
        filter: false,
        width: '5%'
      }
    },
  };

  constructor(
    private datasetService: DatasetService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.datasetService.getMyDatasets().subscribe(
      datasets => {
        this.datasets = datasets;
      }
    );
    this.datasetService.datasetDeleted.subscribe(
      () => {
        this.datasetService.getMyDatasets().subscribe(
          datasets => {
            this.datasets = datasets;
          }
        );
      }
    );
  }

}
