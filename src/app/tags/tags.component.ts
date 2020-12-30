import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators'
import { ITagValue } from './models/tagModels';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit {
  public tagValue: any = "No data";
  private vesselDataProviderUrl = 'http://localhost:4200/api/tags'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ITagValue>(this.vesselDataProviderUrl)
    .pipe(catchError(this.handleError))
    .subscribe({
      next: result => { this.tagValue = result as ITagValue } ,
      error: err => { console.log(err); }
    });
  }

  private handleError(err: HttpErrorResponse): any {
    console.log("Error occured when making http request: " + err);
    throwError(err);
  }
}
