import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  @Input() blog: any;

  private editTitle: boolean = false;
  private editFeaturedImgUrl : boolean = false;
  private editContent: boolean = false;


  @Output() updateBlogEvent = new EventEmitter();
  @Output() deleteBlogEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  onContentClick() {
    this.editContent = true;
  }

  onUrlClick() {
    this.editFeaturedImgUrl = true;
  }


  updateBlog() {
    this.updateBlogEvent.emit(this.blog);
  }

  deleteVideo() {
    this.deleteBlogEvent.emit(this.blog);
  }


}
