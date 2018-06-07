import { Component } from '@angular/core';
import { Comment } from './interfaces/comment';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id = 0;

  new_comment;

  constructor(private _commentService: CommentsService) {

  }

  ngOnInit(){
    this._commentService.getComments();
  }


  addNewComment(name: string, comment: string) {
    this.new_comment = {
      id: this.id++,
      name: name,
      content: comment,
      avatar: ''
    }

    // this._commentService(this.new_comment);

  }


}

