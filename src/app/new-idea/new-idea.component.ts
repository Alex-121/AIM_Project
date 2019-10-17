import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.detailForm.value);
  }
}
