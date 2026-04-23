import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list';
import { PostDetailComponent } from './post-detail/post-detail';

@NgModule({
  imports: [
    CommonModule,
    PostListComponent,
    PostDetailComponent
  ],
  exports: [
    PostListComponent,
    PostDetailComponent
  ]
})
export class FeaturesModule { }