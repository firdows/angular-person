import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/router'
import { AppUrl } from 'src/app/app.url';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {
  @Input() title1: String;
  constructor() {
    console.log(this.title1);

  }

  ngOnInit() {
  }

  AppUrl = AppUrl;


}
