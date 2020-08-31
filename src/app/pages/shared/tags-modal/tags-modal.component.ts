import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';


@Component({
  selector: 'app-tags-modal',
  templateUrl: './tags-modal.component.html',
  styleUrls: ['./tags-modal.component.scss']
})
export class TagsModalComponent implements OnInit {

  @Input() title: string;

  tags: string[];


  constructor(
    protected ref :NbDialogRef<TagsModalComponent>
  ) { }

  ngOnInit(): void {
  }

  add(tagName: string) {
    this.tags.push(tagName);
  }

  addTags() {
    this.ref.close({changed: true, value: this.tags});
  }

  removeTag(tag: string) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  dismiss() {
    this.ref.close({changed: false, value: this.tags});
  }

}
