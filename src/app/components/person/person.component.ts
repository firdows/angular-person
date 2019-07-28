import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AppUrl = AppUrl;

}
