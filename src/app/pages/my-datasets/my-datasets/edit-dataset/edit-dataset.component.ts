import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Dataset } from 'src/app/pages/shared/dataset/dataset.model';
import { DatasetService } from 'src/app/pages/shared/dataset/dataset.service';
import { TagsModalComponent } from 'src/app/pages/shared/tags-modal/tags-modal.component';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-edit-dataset',
  templateUrl: './edit-dataset.component.html',
  styleUrls: ['./edit-dataset.component.scss']
})
export class EditDatasetComponent implements OnInit {

  isDraft: boolean;
  form: FormGroup;
  dataset: Dataset;
  tags: string[];

  datasetApi = environment.localAPi + 'api/dataset';

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: NbDialogService,
    private datasetService: DatasetService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.dataset = data.dataset;
        console.log(this.dataset)
      }
    );

    this.isDraft = false;

    this.form = this.formBuilder.group({
      id: this.dataset.id,
      author: this.dataset.author,
      creationDate: this.dataset.creationDate,
      updateDate: formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'en'),
      name: this.dataset.name,
      alias: this.dataset.alias,
      description: this.dataset.description,
      contributionQuestion: this.dataset.contributionQuestion,
      status: this.dataset.status
    })
    this.tags = this.dataset.tags;
  }

  setToDraft() {
    this.isDraft = true;
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

    if (this.isDraft) {
      this.dataset.status = 'DRAFT';
      this.isDraft = false;
    }

    this.datasetService.putDataset(this.dataset).subscribe(
      (res) => {
        console.log(res);
      }
    );

    // console.log(this.dataset)
    // console.log(JSON.stringify(this.dataset.tags))

    // var formData = new FormData();

    // formData.append('name', this.dataset.name);
    // formData.append('alias', this.dataset.alias);
    // formData.append('description', this.dataset.description);
    // formData.append('contributionQuestion', this.dataset.contributionQuestion);
    // formData.append('datasetFile', this.dataset.datasetFile);
    // this.dataset.tags.forEach(tag => formData.append('tags', tag));

    // if (this.isDraft) {
    //   formData.append('status', 'DRAFT');
    //   this.isDraft = false;
      
    // } else {
    //   formData.append('status', this.dataset.status);
    // }

    // this.datasetService.postDataset(formData).subscribe(
    //   () => this.router.navigate(['pages/search-dataset']),
    //   error => console.log(error)
    // );

  }

}
