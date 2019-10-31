import { Injectable } from '@angular/core';
import { Descriptions } from '../models/description';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IdeasService {
  id = 0;

constructor(
private http: HttpClient,
) { console.log('IdeaSerive works!!')}

getIdeas() {
 return this.http.get('http://localhost:3000/api/main-page');
}
getAnIdea() {
  return this.http.get('http://localhost:3000/api/ideas-page/' + this.id );
}
addIdea(description: Descriptions) {
  return this.http.post('http://localhost:3000/api/new-idea', description);
}
idea_id(data: any) {
this.id = data;
}
updateRating(data: any) {
  let obj = data[0]
  return this.http.put('http://localhost:3000/api/ideas-page/' + this.id, obj);
}
}
