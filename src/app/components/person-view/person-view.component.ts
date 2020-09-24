import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servieces/http.service';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from '../person/person.interface';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  constructor(private http: HttpService,
    private activeRouter: ActivatedRoute) { }
  id: any;
  item: IPerson;
  ngOnInit() {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.loadData(this.id).then(res => {
        this.item = res;
        console.log(this.item);
      });

    }
  }


  loadData(id) {
    return this.http.requestGet('PersonApi', id).toPromise() as Promise<IPerson>;
  }

}
