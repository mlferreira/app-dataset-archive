import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Dataset } from './dataset.model';
import { DatasetService } from './dataset.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DatasetResolverService implements Resolve<Dataset> {
    constructor(
        private datasetService: DatasetService   
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.datasetService.getDatasetById(+route.params['id']).pipe(
            catchError( error => empty())
        )
    }

}