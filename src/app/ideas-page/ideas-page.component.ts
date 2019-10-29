import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../_service/ideas.service';

@Component({
  selector: 'app-ideas-page',
  templateUrl: './ideas-page.component.html',
  styleUrls: ['./ideas-page.component.css']
})
export class IdeasPageComponent implements OnInit {

  constructor(private ideasService: IdeasService) { }

  ngOnInit() {

    this.ideasService.getAnIdea().subscribe((data: any[]) => {
      console.log(data);
  });
}
}
