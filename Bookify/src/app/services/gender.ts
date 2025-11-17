import { Book } from "./book";

export interface Gender {
  id: number;  
  name: string; 
  books?: Book[];   
}
