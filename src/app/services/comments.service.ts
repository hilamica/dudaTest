import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Comment } from '../interfaces/comment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentListSubject = new Subject<Comment[]>();
  comments = [];

  constructor(private http: HttpClient) {

  }

  getComments(): void {
    this.http.get(`${environment.api}/comments`).subscribe(data => {
      console.log(data);
      // this.comments = data['comments'];
    })

  }



  addNewComment(_newComment: Comment) {
    // this.http.post()
  }
  //get
  //add
  //remove
  //edit

}
