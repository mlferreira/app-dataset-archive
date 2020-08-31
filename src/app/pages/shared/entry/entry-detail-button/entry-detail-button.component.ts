import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { CreateEntryModalComponent } from '../create-entry-modal/create-entry-modal.component';
import { EntryDetailComponent } from '../entry-detail/entry-detail.component';

@Component({
  selector: 'app-entry-detail-button',
  templateUrl: './entry-detail-button.component.html',
  styleUrls: ['./entry-detail-button.component.scss']
})
export class EntryDetailButtonComponent implements OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.dialogService.open(EntryDetailComponent, {
      context: {
        title: 'Approve Contribution',
        entry: this.rowData
      }
    });
  }
}
