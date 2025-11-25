import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


export interface Gender {
  id: number;  
  name: string;   
}


@Injectable({
  providedIn: 'root',
})
export class GenderService {
  private apiUrl = 'http://localhost:5211/api/Genders';
  constructor(private http: HttpClient) {}

  getAllGenders(): any {
    return this.http.get<any>(this.apiUrl);
  } 
}