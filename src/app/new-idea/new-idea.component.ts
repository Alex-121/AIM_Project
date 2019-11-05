import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IdeasService } from '../_service/ideas.service';
import {Router, RouterLink} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {
  
  detailForm = new FormGroup({
    Title: new FormControl('Title'),
    Topics: new FormControl('Topics'),
    Description: new FormControl('Description')
  });
  constructor(
    private ideasService: IdeasService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.detailForm.value);
   // let description = new Descriptions;

    this.ideasService.addIdea(this.detailForm.value).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigateByUrl('/main');
  }
}
