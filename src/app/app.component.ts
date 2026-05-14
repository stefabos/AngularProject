import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [FormsModule, FormComponent, ListComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private bookService: BookService) { }


  ngOnInit() {
    this.bookService.loadBooksFromApi();
  }


}
