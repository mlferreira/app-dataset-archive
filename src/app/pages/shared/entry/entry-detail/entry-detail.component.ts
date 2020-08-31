import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective, FormBuilder } from '@angular/forms';
import { EntryService } from '../entry.service';
import { CreateEntryModalComponent } from '../create-entry-modal/create-entry-modal.component';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.scss']
})
export class EntryDetailComponent implements OnInit {
  title: string;
  entry: Entry;

  constructor(
    private entryService: EntryService,
    protected ref :NbDialogRef<CreateEntryModalComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  approveContribution() {
    this.entryService.approveEntry(+this.entry.id, this.entry).subscribe(
      () => {
        this.entryService.updatedEntries.next(true);
        this.ref.close();
      }
    )
  }

  rejectContribution() {
    this.entryService.rejectContribution(+this.entry.id, this.entry).subscribe(
      () => {
        this.entryService.updatedEntries.next(true);
        this.ref.close();
      }
    );
  }


  dismiss() {
    this.ref.close();
  }

}
