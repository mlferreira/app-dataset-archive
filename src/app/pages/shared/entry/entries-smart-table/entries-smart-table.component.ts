import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entries-smart-table',
  templateUrl: './entries-smart-table.component.html',
  styleUrls: ['./entries-smart-table.component.scss']
})
export class EntriesSmartTableComponent implements OnInit {

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
      dataset: {
        title: 'Dataset',
        type: 'text',
        valuePrepareFunction: (value: string[]) => {
          return value['name'];
        }
      },
      name: {
        title: 'Name',
        type: 'text',
      },
      contributionAnswer: {
        title: 'Answer',
        type: 'text',
        valuePrepareFunction: (value: string) => {
          if (value.length > 40) {
            return value.substring(0, 40) + '...';
          }
          return value;
        }
      },
      updateDate: {
        title: 'Submitted',
        type: 'text',
        valuePrepareFunction: (value: Date) => {
          return this.datePipe.transform(value, 'dd/MM/yyyy')
        },
        width: '15%'
      }
    },
  };

  @Input('source')
  source: Entry[]

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    
  }

}
