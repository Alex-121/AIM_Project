import { Injectable } from '@angular/core';
import { Descriptions } from '../models/description';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IdeasService {


constructor(
private http: HttpClient,
) { console.log('IdeaSerive works!!')}

getIdeas() {
 return this.http.get('http://localhost:3000/api/main-page');
 
}
}
