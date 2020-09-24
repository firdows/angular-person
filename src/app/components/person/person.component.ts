import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { HttpService } from 'src/app/servieces/http.service';
import { IPersons, IPerson } from './person.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

    constructor(
        private http: HttpService,
        private router: Router,
        private activeRouter: ActivatedRoute) {

    }

    items: IPersons;
    id: any;
    ngOnInit() {
        this.id = this.activeRouter.snapshot.paramMap.get('id');
        console.log(this.id);


        this.loadData().then(items => this.items = items);
        //console.log(this.router.getCurrentNavigation().extras.state);
    }

    AppUrl = AppUrl;


    loadData() {
        return this.http.requestGet('PersonApi')
            .toPromise() as Promise<IPersons>;
    }


    DeletePerson(id) {
        if (confirm('แน่ใจที่จะลบรายการนี้?')) {
            var del = this.http.requestDelete('PersonApi', id)
                .toPromise() as Promise<IPerson>;
            del.then(items => this.router.navigate(['/person']));
        }
    }
}
