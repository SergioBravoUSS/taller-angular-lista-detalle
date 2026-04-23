import { Component } from '@angular/core';
import { Post } from '../app/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
})
export class AppComponent {
  postActual?: Post;

  recibirPost(post: Post): void {
    this.postActual = post;
  }
}