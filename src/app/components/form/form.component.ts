import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title = '';
  author = '';
 
   @Output()
  bookAdded = new EventEmitter<{
    title: string;
    author: string;
    read: boolean;
  }>();


  addBook() {

    if (!this.title.trim() || !this.author.trim()) {
      return;
    }
  
     this.bookAdded.emit({
      title: this.title,
      author: this.author,
      read: false
    });
    this.title = '';
    this.author = '';
  
  }
   
}
