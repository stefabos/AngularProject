import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

private httpClient = inject(HttpClient)

private baseUrl = 'https://openlibrary.org/search.json?q=fiction&limit=10';

getBoooks(query : string = 'fiction'){
  const url = `${this.baseUrl}q=${query}&limit=10`

  return this.httpClient.get<any>(url).pipe(
    map(resp=> resp.docs)
  )
}

}
