import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(
      ['dataset-edit/' + this.rowData.id],
      {
        relativeTo: this.route,
        state: {
          data: this.rowData
        }
      }
    );
  }

}
