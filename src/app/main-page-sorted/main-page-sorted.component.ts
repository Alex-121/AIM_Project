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
  myForm = new FormGroup({
    search: new FormControl('search')
  });
  ideas = [];
  constructor(
    private ideasService: IdeasService,
    private router:Router
  ) { }

  ngOnInit() {
    this.ideasService.getIdeasOrdered().subscribe((data: any[]) => {
      console.log(data);
      this.ideas = data[0];
    });
  }
 test(id: any) {
  // console.log(id);
  this.ideasService.idea_id(id);
 }

 order() {
  this.router.navigateByUrl('/main');
 }

// search bar
 update() {
   const searchItem = this.myForm.value.search;
//    console.log(this.ideas[0].idea_id);

//    let i;
//    let match;
//    for (i = 0; i < this.ideas.length; i++) {
//    if (this.ideas[i].title === searchItem) {
//     match = this.ideas[i];
//     break;
//    }
//  }console.log(match);
//   this.url = 'http://localhost:4200/#/ideas-page' + match.idea_id;
 }
}
