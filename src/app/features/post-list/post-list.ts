import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostListComponent {
  @Output() postSeleccionado = new EventEmitter<Post>();

  posts: Post[] = [
    { id: 1, title: 'Post 1', body: 'Contenido del post 1' },
    { id: 2, title: 'Post 2', body: 'Contenido del post 2' },
    { id: 3, title: 'Post 3', body: 'Contenido del post 3' }
  ];

  seleccionarPost(post: Post): void {
    this.postSeleccionado.emit(post);
  }
}