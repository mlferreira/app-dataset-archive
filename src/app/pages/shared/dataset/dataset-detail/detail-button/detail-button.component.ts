import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.scss']
})
export class DetailButtonComponent implements OnInit, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(
      ['dataset-detail/'+this.rowData['id']],
      {
        relativeTo: this.route,
        state: {
          data: this.rowData
        }
      },
    );
  }

}
