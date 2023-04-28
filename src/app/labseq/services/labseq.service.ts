import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Labseq } from '../interfaces/Labseq';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LabseqService {
  private baseUrl = `${environment.baseUrl}/labseq`;

  constructor(private http: HttpClient) { }

  getLabseqValue(index: number): Observable<Labseq> {
    const url = `${this.baseUrl}/${index}`;
    return this.http.get<Labseq>(url);
  }
}
