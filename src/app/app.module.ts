import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbListModule, NbInputModule, NbCheckboxModule, NbSelectModule, NbDialogModule, NbAlertModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './@theme/main/main.component';
import { SidebarMenuComponent } from './@theme/sidebar-menu/sidebar-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateDatasetComponent } from './pages/create-dataset/create-dataset.component';
import { PendingContributionsComponent } from './pages/my-datasets/pending-contributions/pending-contributions.component';
import { SearchDatasetComponent } from './pages/search-dataset/search-dataset.component';
import { MyDatasetsComponent } from './pages/my-datasets/my-datasets/my-datasets.component';
import { MyPendingContributionsComponent } from './pages/my-contributions/my-pending-contributions/my-pending-contributions.component';
import { MyApprovedContributionsComponent } from './pages/my-contributions/my-approved-contributions/my-approved-contributions.component';
import { MyRefusedContributionsComponent } from './pages/my-contributions/my-refused-contributions/my-refused-contributions.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DatasetsSmartTableComponent } from './pages/shared/dataset/datasets-smart-table/datasets-smart-table.component';
import { Ng2CompleterModule } from "@akveo/ng2-completer";
import { DatasetDetailComponent } from './pages/shared/dataset/dataset-detail/dataset-detail.component';
import { DatasetService } from './pages/shared/dataset/dataset.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxAuthRoutingModule } from './auth/auth-routing.module';
import { NbAuthService, NbTokenService, NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth'
import { AuthGuardService } from './auth-guard.service'
import { EntriesSmartTableComponent } from './pages/shared/entry/entries-smart-table/entries-smart-table.component';
import { EntryService } from './pages/shared/entry/entry.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { DetailButtonComponent } from './pages/shared/dataset/dataset-detail/detail-button/detail-button.component';
import { DatasetResolverService } from './pages/shared/dataset/dataset-resolver.service';
import { CreateEntryModalComponent } from './pages/shared/entry/create-entry-modal/create-entry-modal.component';
import { DeleteButtonComponent } from './pages/shared/dataset/delete-button/delete-button.component';
import { EntryDetailComponent } from './pages/shared/entry/entry-detail/entry-detail.component';
import { EntryDetailButtonComponent } from './pages/shared/entry/entry-detail-button/entry-detail-button.component';
import { EditButtonComponent } from './pages/shared/dataset/edit-button/edit-button.component';
import { TagsModalComponent } from './pages/shared/tags-modal/tags-modal.component';
import { EditDatasetComponent } from './pages/my-datasets/my-datasets/edit-dataset/edit-dataset.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarMenuComponent,
    HomeComponent,
    CreateDatasetComponent,
    EditDatasetComponent,
    PendingContributionsComponent,
    SearchDatasetComponent,
    MyDatasetsComponent,
    MyPendingContributionsComponent,
    MyApprovedContributionsComponent,
    MyRefusedContributionsComponent,
    DatasetsSmartTableComponent,
    DatasetDetailComponent,
    TagsModalComponent,
    EntriesSmartTableComponent,
    DetailButtonComponent,
    CreateEntryModalComponent,
    DeleteButtonComponent,
    EntryDetailComponent,
    EntryDetailButtonComponent,
    EditButtonComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbEvaIconsModule,
    NbListModule,
    NbInputModule,
    NbUserModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    NbCheckboxModule,
    NbSelectModule,
    // RouterModule.forRoot(routes, { useHash: true }),
    AppRoutingModule,
    NgxAuthRoutingModule,
    // security
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'username',
          token: {
            class: NbAuthJWTToken,
            key: 'token'
          },
          baseEndpoint: 'http://3.134.113.210:8080',
          login: {
            endpoint: '/api/user/login',
            method: 'post',
            redirect: {
              success: '/pages/home', // welcome page path
              failure: null, // stay on the same page
            },
          },
          register: {
            endpoint: '/api/user/signup',
            method: 'post'
          },
          logout: {
            endpoint: '',
            redirect: {
              success: '/auth/login', // welcome page path
              failure: null, // stay on the same page
            }
          }
        })
      ],
      forms: {
        login: {
          redirectDelay: 500,
          strategy: 'username',
          rememberMe: true,
          showMessages: {
            success: true,
            error: true
          }
        }
      }
    })
  ],
  providers: [
    DatasetService,
    DatePipe,
    NbAuthService,
    NbTokenService,
    NbAuthJWTToken,
    AuthGuardService,
    EntryService,
    DatasetResolverService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true
    }
  ],
  entryComponents: [
    TagsModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
