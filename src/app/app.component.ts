import { Component } from '@angular/core';
import { Comment } from './interfaces/comment';
import { CommentsService } from './services/comments.service';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id = 0;

  public comments = [];
  new_comment;

  constructor(private _commentService: CommentsService) {
  }

  ngOnInit() {
    this._commentService.getComments().subscribe((data: Comment[]) => {
      this.comments = data;
    })
  }

  addNewComment(name: string, comment: string) {
    this.new_comment = {
      id: this.id++,
      name: name,
      content: comment,
      avatar: ''
    }


    // this._commentService.addNewComment(this.new_comment).subscribe((data: Comment[]) => {
    //   this.comments = data;
    // })

    this._commentService.addNewComment(this.new_comment);

    this._commentService.commentListSubject.subscribe((data: Comment[]) => {
      this.comments = data;
    })

    // this._commentService.addNewComment(this.new_comment).subscribe(() => {
    // this._commentService.getComments().subscribe((data: Comment[]) => {
    //   this.comments = data;
    //   console.log(this.comments);
    // })

    // this._commentService.commentListSubject.next()
    // })

    // this._commentService.commentListSubject.subscribe(data => {
    //   this._commentService.getComments().subscribe((data: Comment[]) => {
    //     this.comments = data;
    //     console.log(this.comments);
    //   })
    // })
  }

  deleteComment(_comment: Comment) {
    this._commentService.removeComment(_comment).subscribe(() => {
      this._commentService.getComments().subscribe((data: Comment[]) => {
        this.comments = data;
      })
    })
  }
}