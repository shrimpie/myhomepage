import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../models/blog';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-center',
  templateUrl: './blog-center.component.html',
  styleUrls: ['./blog-center.component.css']
})
export class BlogCenterComponent implements OnInit {

  blogs: Array<Blog>;
  selectedBlog: Blog;
  username: string;

  private hideNewBlog: boolean = true;

  constructor(private _blogService : BlogService) { }

  ngOnInit() {

    this.username = JSON.parse(localStorage.getItem('user'))['username'];
    // console.log('1. username: ', this.username);

    this._blogService
        .getBlogs(this.username)
        .subscribe(resBlogData => {
          console.log('resBlogData: ', resBlogData);
          this.blogs = resBlogData;
          if(this.blogs.length > 0) {
            this.selectedBlog = this.blogs[0];
          }
        });
  }

  onSelectBlog(blog : Blog) {
    this.selectedBlog = blog;
    this.hideNewBlog = true;
    // console.log(this.selectedBlog);
  }

  onSubmitAddBlog(blog : Blog) {
    blog['author'] = this.username;
    // console.log('new blog: ', blog);

    this._blogService
        .addBlog(blog)
        .subscribe(
          resNewBlog => {
          console.log(resNewBlog);
          this.blogs.push(resNewBlog);
          this.hideNewBlog = true;
          this.selectedBlog = resNewBlog;
      }
    );
  }

  onUpdateBlogEvent(blog : Blog) {
    // console.log('update blog: ', blog);
    this._blogService
        .updateBlog(blog)
        .subscribe(resUpdatedBlog => {
          blog = resUpdatedBlog
          this.selectedBlog = resUpdatedBlog;
        });
  }

  onDeleteBlogEvent(blog : Blog) {
    let blogArray = this.blogs;
    this._blogService
        .deleteBlog(blog)
        .subscribe(resDeletedBlog => {
          for(let i = 0; i < blogArray.length; ++i) {
            if(blogArray[i]._id === blog._id) {
              blogArray.splice(i, 1);
            }
          }
        });
    this.selectedBlog = this.blogs.length ? this.blogs[0] : null;
  }

  newBlog() {
    this.hideNewBlog = false;
  }

}
