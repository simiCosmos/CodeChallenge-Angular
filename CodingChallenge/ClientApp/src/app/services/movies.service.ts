import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiBaseService } from '../api-base.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  basePath = 'movie';

  constructor(
    private apiBase: ApiBaseService
  ) {}

  getMovies(): Observable<any> {
    return this.apiBase.get(this.basePath);
  }
}
