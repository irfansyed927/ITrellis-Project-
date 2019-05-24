import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  // TODO: methods to return data from json file or create an in memory web api
  constructor(private http: HttpClient) {}

public getJSON(): Observable<any> {
    return this.http.get("assets/cars-data.json");//returning json data
}
  
}
