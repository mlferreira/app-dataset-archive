import { Injectable, OnInit } from '@angular/core';
import { Dataset } from './dataset.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NbAuthToken } from '@nebular/auth';
import { Subject } from 'rxjs';

@Injectable()
export class DatasetService implements OnInit {

  datasetDeleted =  new Subject();

  private datasetsApi = environment.localAPi + 'api/dataset';
  private myDatasetsApi = environment.localAPi + 'api/dataset/my-datasets';

  datasets = [];
  token: NbAuthToken;

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  getHomeDatasets() {
    return this.http.get<Dataset[]>(this.datasetsApi);
  }

  getMyDatasets() {
    return this.http.get<Dataset[]>(this.myDatasetsApi);

  }

  putDataset(dataset: Dataset) {
    return this.http.put(this.datasetsApi, dataset);
  }

  postDataset(formData: FormData) {
    return this.http.post(this.datasetsApi, formData);
  }

  getDatasetById(id: number) {
    return this.http.get<Dataset>(this.datasetsApi + '/' + id);
  }

  deleteDataset(id: number) {
    return this.http.delete<Dataset>(this.datasetsApi + '/' + id)
  }


}