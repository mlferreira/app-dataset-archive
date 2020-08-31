import { Injectable, OnInit } from '@angular/core';
import { Entry } from './entry.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NbAuthToken } from '@nebular/auth';
import { Subject } from 'rxjs';

@Injectable()
export class EntryService implements OnInit {

  updatedEntries: Subject<boolean> = new Subject<boolean>();

  entryApi = environment.localAPi + 'api/entry';
  acceptedEntriesApi = this.entryApi + '/my-accepted-entries';
  rejectedEntriesApi = this.entryApi + '/my-rejected-entries';
  pendingEntriesApi = this.entryApi + '/my-pending-entries';
  pendingContributionApi = this.entryApi + '/pending-contributions';
  approveContributionApi = this.entryApi + '/approve';
  rejectContributionApi = this.entryApi + '/reject';

  datasets = [];
  token: NbAuthToken;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

  getAcceptedEntries() {
    return this.http.get<Entry[]>(this.acceptedEntriesApi);
  }

  getPendingEntries() {
    return this.http.get<Entry[]>(this.pendingEntriesApi);
  }

  getRejectedEntries() {
    return this.http.get<Entry[]>(this.rejectedEntriesApi);
  }

  getPendingContributions() {
    return this.http.get<Entry[]>(this.pendingContributionApi);
  }

  postEntry(form: FormData) {
    return this.http.post(this.entryApi, form);
  }

  approveEntry(id: number, contribution: Entry) {
    return this.http.put<Entry>(this.approveContributionApi + '/' + id, contribution);
  }

  rejectContribution(id: number, contribution: Entry) {
    return this.http.put<Entry>(this.rejectContributionApi + '/' + id, contribution);
  }

}