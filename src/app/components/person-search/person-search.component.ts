import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { mergeMap } from 'rxjs/operators';
//--
import { IPerson } from '../person/person.interface';
import { HttpService } from 'src/app/servieces/http.service';


@Component({
    selector: 'app-person-search',
    templateUrl: './person-search.component.html',
    styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent {

    constructor(
        private http: HttpService,
    ) { }

    private asyncSelectedCarModel: string;
    private asyncSelected: IPerson;
    private asyncCars: Observable<any>;
    private typeaheadLoading: boolean;
    private cars: any;

    ngOnInit() {
        this.asyncCars = Observable.create((observer: any) => {
            observer.next(this.asyncSelected);
        })
            .pipe(
                mergeMap((token: string) => this.getCarsAsObservable(token))
            );
    }


    getCarsAsObservable(token: string): Observable<any> {

        console.log(token);
        this.loadData(token)
            .then(person => this.cars = person);
        return of(this.cars);

    }

    loadData(token: string) {
        console.log(token);
        return this.http.requestGet("PersonApi/list?q=" + token)
            .toPromise() as Promise<IPerson[]>;
    }

    changeTypeaheadLoading(e: boolean): void {
        this.typeaheadLoading = e;
    }

    typeaheadOnSelect(e: TypeaheadMatch): void {
        // this.asyncSelectedCar = e.item;
        console.log('Selected value: ', e.value, 'id', e.item.id);

    }


}
