import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  @Input()
  blogs : Array<Blog>;

  @Output()
  SelectBlog = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onSelect(blog : Blog) {
    this.SelectBlog.emit(blog);
  }

}
