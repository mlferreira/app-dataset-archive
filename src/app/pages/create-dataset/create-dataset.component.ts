import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dataset } from '../shared/dataset/dataset.model';
import { NbDialogService } from '@nebular/theme';
import { environment } from 'src/environments/environment';
import { DatasetService } from '../shared/dataset/dataset.service';
import { Router } from '@angular/router';
import { TagsModalComponent } from '../shared/tags-modal/tags-modal.component';


@Component({
  selector: 'app-create-dataset',
  templateUrl: './create-dataset.component.html',
  styleUrls: ['./create-dataset.component.scss']
})
export class CreateDatasetComponent implements OnInit {

  isDraft: boolean;
  form: FormGroup;
  uploadedFile;
  selectedFileName: string;
  dataset: Dataset;
  tags: string[];

  datasetApi = environment.localAPi + 'api/dataset';

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: NbDialogService,
    private datasetService: DatasetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isDraft = false;
    this.selectedFileName = '';
    this.form = this.formBuilder.group({
      name: '',
      alias: '',
      description: '',
      tags: null,
      contributionQuestion: '',
      status: 'OPEN',
      datasetFile: [null]
    })
    this.tags = [];
  }

  setToDraft() {
    this.isDraft = true;
  }

  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.uploadedFile = file;
      this.selectedFileName = file.name;
    }
  }

  openAddTag() {
    this.dialogService.open(TagsModalComponent, {
      context: {
        title: 'Add Tags',
        tags: this.tags
      }
    }).onClose.subscribe(
      (tags) => {
        if (this.tags['changed'] === true) {
          this.tags = tags.value;
        }
      }
    )
  }

  submitForm() {

    this.dataset = this.form.value;
    this.dataset.tags = this.tags;
    this.dataset.datasetFile = this.uploadedFile;

    console.log(this.dataset)
    console.log(JSON.stringify(this.dataset.tags))

    var formData = new FormData();

    formData.append('name', this.dataset.name);
    formData.append('alias', this.dataset.alias);
    formData.append('description', this.dataset.description);
    formData.append('contributionQuestion', this.dataset.contributionQuestion);
    formData.append('datasetFile', this.dataset.datasetFile);
    this.dataset.tags.forEach(tag => formData.append('tags', tag));

    if (this.isDraft) {
      formData.append('status', 'DRAFT');
      this.isDraft = false;
      
    } else {
      formData.append('status', this.dataset.status);
    }

    this.datasetService.postDataset(formData).subscribe(
      () => this.router.navigate(['pages/search-dataset']),
      error => console.log(error)
    );

  }

}
