import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../shared/entry/entry.service';
import { Entry } from '../../shared/entry/entry.model';
import { DatePipe } from '@angular/common';
import { EntryDetailButtonComponent } from '../../shared/entry/entry-detail-button/entry-detail-button.component';

@Component({
  selector: 'app-pending-contributions',
  templateUrl: './pending-contributions.component.html',
  styleUrls: ['./pending-contributions.component.scss']
})
export class PendingContributionsComponent implements OnInit {

  contributions: Entry[];

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
      },
      detail: {
        title: 'Detail',
        type: 'custom',
        renderComponent: EntryDetailButtonComponent,
        filter: false,
        width: '5%'
      },
    },
  };

  constructor(
    private entryService: EntryService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.entryService.getPendingContributions().subscribe(
      entries => {
        this.contributions = entries;
      }
    );

    this.entryService.updatedEntries.subscribe(
      () => {
        this.entryService.getPendingContributions().subscribe(
          entries => {
            this.contributions = entries;
          }
        ); 
      }
    );
  }

}
