import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpService } from 'src/app/servieces/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private http: HttpService,
    private router: Router
  ) {

    this.http;

  }

  form: FormGroup;

  ngOnInit() {

    this.form = this.builder.group({
      firstname: [''],
      lastname: [''],
    });
  }

  onSubmit() {

    console.log(this.form.value);
    if (this.form.valid) {
      this.http.requestPost('PersonApi', this.form.value);

      this.router.navigate(['/person']);
    }
  }

  private initialCreate() {
    this.form = this.builder.group({
      firstname: [''],
      lastname: ['']
    })
  }

}
