import { Component, OnInit } from '@angular/core';
import { Entry } from '../../shared/entry/entry.model';
import { EntryService } from '../../shared/entry/entry.service';

@Component({
  selector: 'app-my-refused-contributions',
  templateUrl: './my-refused-contributions.component.html',
  styleUrls: ['./my-refused-contributions.component.scss']
})
export class MyRefusedContributionsComponent implements OnInit {

  entries: Entry[];

  constructor(
    private  entryService: EntryService
  ) { }

  ngOnInit(): void {
    this.entryService.getRejectedEntries().subscribe(
      entries => {
        this.entries = entries;
      }
    );
  }

}
