import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpService } from 'src/app/servieces/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPersons, IPerson } from '../person/person.interface';

@Component({
    selector: 'app-person-create',
    templateUrl: './person-create.component.html',
    styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

    constructor(
        private builder: FormBuilder,
        private http: HttpService,
        private router: Router,
        private activeRouter: ActivatedRoute
    ) {

        //this.http;

    }

    form: FormGroup;
    id: any;

    ngOnInit() {
        this.id = this.activeRouter.snapshot.paramMap.get('id');
        console.log(this.id);

        if (this.id) {
            this.loadData(this.id).then(res => {
                console.log(res);
                this.item = res;
                this.form = this.builder.group(this.item);
            })
        } else {
            this.form = this.builder.group({
                firstname: [''],
                lastname: [''],
            });
        }
    }

    item: IPerson;
    onSubmit() {

        console.log(this.form.value);
        if (this.form.valid) {
            if (this.id) {
                this.http.requestPut('PersonApi', this.id, this.form.value);
            } else {
                this.http.requestPost('PersonApi', this.form.value);
            }

            this.router.navigate(['/person']);
        }
    }

    private initialCreate() {
        this.form = this.builder.group({
            firstname: [''],
            lastname: ['']
        })
    }

    private initialUpdate() {
        this.form = this.builder.group({
            firstname: [''],
            lastname: ['']
        })
    }

    loadData(id) {
        return this.http.requestGet('PersonApi/' + id)
            .toPromise() as Promise<IPerson>;
    }

}
