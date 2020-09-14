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
  private donwloadDatasetsApi = environment.localAPi + 'download/';

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

    let datasetQueryParam: string = '';


    datasetQueryParam = datasetQueryParam.concat('?id=' + dataset.id + '&');
    datasetQueryParam = datasetQueryParam.concat('alias=' + dataset.alias + '&');
    datasetQueryParam = datasetQueryParam.concat('name=' + dataset.name + '&');
    datasetQueryParam = datasetQueryParam.concat('author=' + dataset.author + '&');
    datasetQueryParam = datasetQueryParam.concat('description=' + dataset.description + '&');
    datasetQueryParam = datasetQueryParam.concat('creationDate=' + dataset.creationDate + '&');
    datasetQueryParam = datasetQueryParam.concat('updateDate=' + dataset.updateDate + '&');
    datasetQueryParam = datasetQueryParam.concat('status=' + dataset.status + '&');
    datasetQueryParam = datasetQueryParam.concat('contributionQuestion=' + dataset.contributionQuestion);

    dataset.tags.forEach(
      (tag) => {
        datasetQueryParam = datasetQueryParam.concat('&tags=' + tag);
      }
    );

    return this.http.put(this.datasetsApi + '/' + dataset.id + datasetQueryParam, dataset);
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

  downloadDataset(url: string) {
  window.open(
    url,
    '_blank' // <- This is what makes it open in a new window.
  );
    // window.location.assign('url');
    // url = url.replace('https://dataset-archive-repo.s3.us-east-2.amazonaws.com/', '');
    // return this.http.get(this.donwloadDatasetsApi + url, {responseType: 'blob'});
  }


}