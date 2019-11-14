import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IdeasService } from '../_service/ideas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-sorted',
  templateUrl: './main-page-sorted.component.html',
  styleUrls: ['./main-page-sorted.component.css']
})
export class MainPageSortedComponent implements OnInit {
  ideas = [];
  pageOfItems: Array<any>;
  searchTerm: string;

  constructor(
    private ideasService: IdeasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ideasService.getIdeasOrdered().subscribe((data: any[]) => {
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
  this.router.navigateByUrl('/main');
 }

 onChangePage(pageOfItems: Array<any>) {
  this.pageOfItems = pageOfItems;
}
}
