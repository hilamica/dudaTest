import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getComments() {
    return this.http.get(`${environment.api}/comments`)
  }

  addNewComment(_newComment: Comment) {
    return this.http.post(`${environment.api}/comments`, _newComment);
  }

  removeComment(_commentToDelete: Comment) {
    return this.http.delete(`${environment.api}/comments/${_commentToDelete.id}`);
  }
  //remove
  //edit

}
