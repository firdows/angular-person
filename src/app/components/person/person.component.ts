import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { HttpService } from 'src/app/servieces/http.service';
import { IPersons, IPerson } from './person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(
    private http: HttpService, ) { }

items : IPersons;

  ngOnInit() {
    this.loadData().then(items=>this.items = items);
  }

  AppUrl = AppUrl;


  loadData(){
    return this.http.requestGet('PersonApi')
      .toPromise() as Promise<IPersons>;
  }
}
