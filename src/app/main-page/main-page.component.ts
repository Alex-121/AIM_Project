import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IdeasService } from '../_service/ideas.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Descriptions } from '../models/description';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  ideas = [];
  pageOfItems: Array<any>;
  searchterm: string;

  constructor(
    private ideasService: IdeasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ideasService.getIdeas().subscribe((data: any[]) => {
      console.log(data);
      this.ideas = data[0];
      this.pageOfItems = data[0];
    });
  }
 test(id: any) {
  // console.log(id);
  this.ideasService.idea_id(id);
 }

order() {
  this.router.navigateByUrl('/main-page-sorted');
}

 onChangePage(pageOfItems: Array<any>) {
   this.pageOfItems = pageOfItems;
 }
}
