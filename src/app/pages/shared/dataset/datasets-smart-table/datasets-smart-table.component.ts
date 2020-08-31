import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from '../dataset.model';
import { DatasetService } from '../dataset.service';
import { DatePipe } from '@angular/common';
import { DetailButtonComponent } from '../dataset-detail/detail-button/detail-button.component';

@Component({
  selector: 'app-datasets-smart-table',
  templateUrl: './datasets-smart-table.component.html',
  styleUrls: ['./datasets-smart-table.component.scss']
})
export class DatasetsSmartTableComponent implements OnInit {



  @Input('settings')
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
        width: '15%'
      },
      detail: {
        title: 'Detail',
        type: 'custom',
        renderComponent: DetailButtonComponent,
        filter: false,
        width: '5%'
      }
    },
  };

  @Input('source')
  source: Dataset[]

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

}
