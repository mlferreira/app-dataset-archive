import { Component, OnInit } from '@angular/core';
import { Entry } from '../../shared/entry/entry.model';
import { EntryService } from '../../shared/entry/entry.service';

@Component({
  selector: 'app-my-approved-contributions',
  templateUrl: './my-approved-contributions.component.html',
  styleUrls: ['./my-approved-contributions.component.scss']
})
export class MyApprovedContributionsComponent implements OnInit {

  entries: Entry[];

  constructor(
    private entryService: EntryService
  ) { }

  ngOnInit(): void {
    this.entryService.getAcceptedEntries().subscribe(
      entries => {
        this.entries = entries;
      }
    );
  }

}
 
