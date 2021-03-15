import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }
 

  getData(): Observable<any> {  
    return this.http.get("http://localhost:3080/api/UnitesStatesData")  
      .pipe((response) => response);  
  }

  stateData(currentState: string): Observable<any> {
    let params = new HttpParams().set("state",currentState)
    let url ="http://localhost:3080/api/StatesData";
    return this.http.get(url, {params: params})
    .pipe((response) => response);
  }

  stateInfo(currentState: string): Observable<any> {
    let params = new HttpParams().set("state",currentState)
    let url ="http://localhost:3080/api/StatesInfo";
    return this.http.get(url, {params: params})
    .pipe((response) => response);
  }
}
