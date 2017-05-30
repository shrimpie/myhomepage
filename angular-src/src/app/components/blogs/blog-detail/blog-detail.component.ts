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

  onEditUrlClick() {
    this.editFeaturedImgUrl = true;
  }

  onCancelEditUrlClick() {
    this.editFeaturedImgUrl = false;
  }

  onCancelEditTitleClick() {
    this.editTitle = false;
  }

  onCancelContentClick() {
    this.editContent = false;
  }

  updateBlog() {
    this.updateBlogEvent.emit(this.blog);
    this.editFeaturedImgUrl = false;
    this.editTitle = false;
    this.editContent = false;
  }

  deleteBlog() {
    if(confirm("Are you sure to delete this blog?")) {
      // console.log("This blog is about to be deleted");
      this.deleteBlogEvent.emit(this.blog);
    }
  }

}
