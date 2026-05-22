import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { OpenLibraryBook } from '../models/openLibraryBook.interface';
@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

private httpClient = inject(HttpClient)

private baseUrl = 'http://localhost:8080/libri';

getBoooks(){
  

  return this.httpClient.get<any[]>(this.baseUrl);
}
postBooks(book : OpenLibraryBook){
    return this.httpClient.post<OpenLibraryBook>(this.baseUrl, book);

}

}
