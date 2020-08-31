import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { EntryService } from '../entry.service';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-entry-modal',
  templateUrl: './create-entry-modal.component.html',
  styleUrls: ['./create-entry-modal.component.scss']
})
export class CreateEntryModalComponent implements OnInit {
  title: string;
  datasetId: Number;
  contributionQuestion: string;

  tags: string[];
  selectedFileName: string;
  selectedFile: File;
  form: FormGroup;
  @ViewChild('documentEditForm') documentEditForm: FormGroupDirective; 

  constructor(
    private formBuilder: FormBuilder,
    private entryService: EntryService,
    protected ref :NbDialogRef<CreateEntryModalComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tags = [];
    this.selectedFileName = '';
    this.selectedFile = null;

    this.form = this.formBuilder.group({
      contributionAnswer: '',
      description: '',
      name: '',
    });
  }

  submitForm() {
    this.entryService.postEntry(this.buildFormData(this.form)).subscribe(
      () => {
        this.dismiss(); 
        this.router.navigate(['pages', 'my-contributions', 'pending']);
      }
    );
  }

  removeTag(tag) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  addTag(tag: string) {
    this.tags.push(tag);
  }

  inputFileChange(event) {
    if(event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.selectedFile = file;
      this.selectedFileName = file.name;
    }
  }

  buildFormData(formGroup: FormGroup): FormData {
    let formData = new FormData();
    formData.append('contributionAnswer', formGroup.value['contributionAnswer']);
    formData.append('datasetId', this.datasetId.toLocaleString());
    formData.append('description', formGroup.value['description']);
    formData.append('file', this.selectedFile);
    formData.append('name', formGroup.value['name']);
    this.tags.forEach(tag => formData.append('tags', tag));

    return formData;
  }

  dismiss() {
    this.ref.close();
  }

}
