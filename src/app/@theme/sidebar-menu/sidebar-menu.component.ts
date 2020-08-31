import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  items: NbMenuItem[] =[
    {
      title: 'Home',
      link: '/pages/home',
      icon: 'home-outline',
      expanded: false,
      home: true,
    },
    {
      title: 'Create Dataset',
      link: '/pages/create-dataset',
      icon: 'plus-outline',
    },
    {
      title: 'Search Dataset',
      link: '/pages/search-dataset',
      icon: 'search-outline',
    },
    {
      title: 'My Datasets',
      icon: 'checkmark-square-outline',
      children: [
        {
          title: 'Datasets',
          link: '/pages/my-datasets/my-datasets'
        },
        {
          title: 'Pending Contributions',
          link: '/pages/my-datasets/pending-contributions'
        }
      ]
    },
    {
      title: 'My Contributions',
      icon: 'checkmark-circle-outline',
      children: [
        {
          title: 'Pending',
          link: '/pages/my-contributions/pending'
        },
        {
          title: 'Approved',
          link: '/pages/my-contributions/approved'
        },
        {
          title: 'Rejected',
          link: '/pages/my-contributions/refused'
        }
      ]
    },
    {
      title: 'Logout',
      icon: 'log-out-outline',
      link: '#'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
