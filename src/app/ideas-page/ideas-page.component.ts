import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../_service/ideas.service';
import { StarRatingComponent} from 'ng-starrating';
import { Descriptions } from '../models/description';
@Component({
  selector: 'app-ideas-page',
  templateUrl: './ideas-page.component.html',
  styleUrls: ['./ideas-page.component.css']
})
export class IdeasPageComponent implements OnInit {
  idea;

  constructor(private ideasService: IdeasService) { }

  ngOnInit() {

    this.ideasService.getAnIdea().subscribe((data: any) => {
      console.log(data);
      this.idea = data;

  });
}
  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    console.log($event.newValue);
    this.idea.rating = this.idea.rating + $event.newValue;
    this.ideasService.updateRating(this.idea).subscribe((data: any) => {
      console.log(data);
    });
  }

}
