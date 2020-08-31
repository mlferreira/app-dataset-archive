import { Component, OnInit } from '@angular/core';
import { Entry } from '../../shared/entry/entry.model';
import { EntryService } from '../../shared/entry/entry.service';
 
@Component({
  selector: 'app-my-pending-contributions',
  templateUrl: './my-pending-contributions.component.html',
  styleUrls: ['./my-pending-contributions.component.scss']
})
export class MyPendingContributionsComponent implements OnInit {

  entries: Entry[];

  constructor(
    private  entryService: EntryService
  ) { }

  ngOnInit(): void {
    this.entryService.getPendingEntries().subscribe(
      entries => {
        this.entries = entries;
      }
    );
  }

}
