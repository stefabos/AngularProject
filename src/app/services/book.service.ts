import { Injectable, signal, computed } from '@angular/core';
import { Book } from '../models/book.interface';
import { OpenLibraryService } from './open-library.service';
import { OpenLibraryBook } from '../models/openLibraryBook.interface';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = signal<Book[]>([])


  constructor(private api : OpenLibraryService) { }

  totalBooks = computed(() => this.books().length);

  readBooks = computed(() =>
    this.books().filter(b => b.read).length
  );

  addBook(book: Omit<Book, 'id'>) {
    const newBook: Book = {
      id: "i",
      ...book
    };

    this.books.update(currentBooks => [
      ...currentBooks,
      newBook
    ]);
  }
  removeBook(id:  string) {
    this.books.update(currentBooks => currentBooks.filter(book => book.id !== id));

  };
  toggleRead(id: string){
    this.books.update(currentBooks => currentBooks.map(book=>book.id === id ? {...book, read: !book.read}
      : book
    ));
  }

    loadBooksFromApi(){
    
  
      this.api.getBoooks().subscribe(data=>{

        this.books.set(
          data.map((b:OpenLibraryBook): Book=> ({
            id: b.id,
            title: b.titolo,
            author: b.autore||'Unknown',
            read: false
          }))
        )
      }
      )
    }
}
