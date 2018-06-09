import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  public commentListSubject = new Subject();

  constructor(private http: HttpClient) {
  }

  getComments() {
    return this.http.get(`${environment.api}/comments`);
  }

  addNewComment(_newComment: Comment) {
    // return this.http.post(`${environment.api}/comments`, _newComment);

    this.http.post(`${environment.api}/comments`, _newComment).subscribe(() => {
      this.getComments().subscribe((data: Comment[]) => {
        this.commentListSubject.next(data);
      })
    })

    // return new Observable(observer => {

    //   this.http.post(`${environment.api}/comments`, _newComment).subscribe(() => {

    //     this.getComments().subscribe((data: Comment[]) => {
    //       // observer.next(data);

    //       this.commentListSubject.next(data);
    //     })

    //   })

    // })
  }

  removeComment(_commentToDelete: Comment) {
    return this.http.delete(`${environment.api}/comments/${_commentToDelete.id}`);
  }


  save(_comment: Comment) {
    return this.http.put(`${environment.api}/comments/${_comment.id}`, _comment);
  }

}
