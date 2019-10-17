import { Component } from '@angular/core';
import { IdeasService } from './_service/ideas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IdeasService]
})
export class AppComponent {

  title = 'Testing';

}
