import { ChangeDetectorRef, Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.css']
})
export class PostListComponent implements OnInit {
  @Output() postSeleccionado = new EventEmitter<Post>();

  selectedId: number | null = null;
  posts: Post[] = [];
  cargando = true;
  error = '';

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  console.log('Cargando desde API...');

  this.postService.getPosts().subscribe({
    next: (data) => {
      console.log('API OK:', data);

      // 🔥 Mezclar (copia para no mutar el original)
      const mezclados = [...data].sort(() => Math.random() - 0.5);

      // 🔥 Tomar solo 5
      this.posts = mezclados.slice(0, 5);

      this.cargando = false;

      console.log('POSTS RANDOM:', this.posts);
      console.log('LARGO POSTS:', this.posts.length);

      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error al cargar posts:', err);
      this.error = 'No se pudieron cargar los posts.';
      this.cargando = false;
      this.cdr.detectChanges();
    }
  });
}


  seleccionarPost(post: Post): void {
    this.selectedId = post.id;
    this.postSeleccionado.emit(post);
  }

  trackByPostId(index: number, post: Post): number {
    return post.id;
  }
}