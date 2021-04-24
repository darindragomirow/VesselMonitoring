import { Injectable } from '@angular/core';
import { ITag, ITagValue } from '../models/tagModels';
import { Constants } from '../utils/constants';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, interval } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ITagDataService{
  getValue(tag: ITag): Observable<any>;
  getAllTags(): Observable<any>;
}

@Injectable({
  providedIn: 'root'
})
export class TagDataService implements ITagDataService {

  constructor(private http: HttpClient) { }

  public getValue(tag: ITag): Observable<any>{
    if (!tag || !tag.id){
      throw new Error('The selected tag is invalid.');
    }

    const params = new HttpParams()
    .set('id', tag.id);
    const headers = new HttpHeaders(
      { 'Content-Type': 'application/json' }
    );

    return this.http.get<ITagValue>(
      `${Constants.VesselDataProviderServiceUrl}/getValueAtTime`,
      { headers, params })
    .pipe(catchError(this.handleError));
  }

  public getAllTags(): Observable<any>{
    return this.http.get<ITagValue>(
      `${Constants.VesselDataProviderServiceUrl}/getAll`)
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): any {
    console.log('Error occured when making http request: ' + err);
    throwError(err);
  }
}
