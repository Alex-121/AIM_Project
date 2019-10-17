import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IdeasService } from '../_service/ideas.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  myForm = new FormGroup({
    search: new FormControl('search')
  });
  ideas = [];
  constructor(
    private ideasService: IdeasService
  ) { }

  ngOnInit() {
    this.ideasService.getIdeas().subscribe((data: any[]) => {
      console.log(data);
      this.ideas = data;
    });
  }
 click() {
   
 }
}
