import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { Constants } from '../utils/constants';
import { ITag } from '../models/tagModels';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit {
  public tags: ITag[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initAllTags();
  }

  private initAllTags(): void {
    this.http.get<ITag[]>(`${Constants.VesselDataProviderServiceUrl}/getAll`)
    .pipe(catchError(this.handleError))
    .subscribe({
      next: result => {
         this.tags = result as ITag[];
        } ,
      error: err => { console.log(err); }
    });
  }

  private handleError(err: HttpErrorResponse): any {
    console.log('Error occured when making http request: ' + err);
    throwError(err);
  }
}
