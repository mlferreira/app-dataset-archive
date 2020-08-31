import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { DatasetService } from '../dataset.service';


@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output('datasetDeleted')
  rowDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private datasetService: DatasetService
  ) {}

  ngOnInit(): void {
  }

  onClick() {

    if(confirm("Are you sure to delete dataset: " + this.rowData['name'] + "?")) {
      this.datasetService.deleteDataset(this.rowData['id']).subscribe(
        () => {
          this.datasetService.datasetDeleted.next();
        }
      );
    }
  }

}
