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
  private apiUrl = 'https://localhost:7079/api/Genders';
  constructor(private http: HttpClient) {}

  getAllGenders(): any {
    return this.http.get<any>(this.apiUrl);
  } 
}