import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateDatasetComponent } from './pages/create-dataset/create-dataset.component';
import { PendingContributionsComponent } from './pages/my-datasets/pending-contributions/pending-contributions.component';
import { MyDatasetsComponent } from './pages/my-datasets/my-datasets/my-datasets.component';
import { SearchDatasetComponent } from './pages/search-dataset/search-dataset.component';
import { MyPendingContributionsComponent } from './pages/my-contributions/my-pending-contributions/my-pending-contributions.component';
import { MyApprovedContributionsComponent } from './pages/my-contributions/my-approved-contributions/my-approved-contributions.component';
import { MyRefusedContributionsComponent } from './pages/my-contributions/my-refused-contributions/my-refused-contributions.component';
import { AuthGuardService } from './auth-guard.service';
import { DatasetDetailComponent } from './pages/shared/dataset/dataset-detail/dataset-detail.component';
import { DatasetResolverService } from './pages/shared/dataset/dataset-resolver.service';
import { EditDatasetComponent } from './pages/my-datasets/my-datasets/edit-dataset/edit-dataset.component';


const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuardService],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'home/dataset-detail/:id', component: DatasetDetailComponent, resolve: {dataset: DatasetResolverService}},

      {path: 'create-dataset', component: CreateDatasetComponent},

      {path: 'search-dataset', component: SearchDatasetComponent},
      {path: 'search-dataset/dataset-detail/:id', component: DatasetDetailComponent, resolve: {dataset: DatasetResolverService}},

      {path: 'my-datasets/pending-contributions', component: PendingContributionsComponent},

      {path: 'my-datasets/my-datasets', component: MyDatasetsComponent},
      {path: 'my-datasets/my-datasets/dataset-detail/:id', component: DatasetDetailComponent, resolve: {dataset: DatasetResolverService}},
      {path: 'my-datasets/my-datasets/dataset-edit/:id', component: EditDatasetComponent, resolve: {dataset: DatasetResolverService}},
      
      {path: 'my-contributions/pending', component: MyPendingContributionsComponent},
      {path: 'my-contributions/approved', component: MyApprovedContributionsComponent},
      {path: 'my-contributions/refused', component: MyRefusedContributionsComponent},
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.NgxAuthModule),
  },
  {path: '**', redirectTo: '/pages/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
