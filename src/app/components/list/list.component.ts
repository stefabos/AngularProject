import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private bookservice : BookService){}

  books = this.bookservice.books

  remove(id: string){
    this.bookservice.removeBook(id)

  }
  toggle(id:  string){
    this.bookservice.toggleRead(id)
  }

}
