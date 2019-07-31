import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/servieces/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private http: HttpService
  ) {
    this.initForm();

  }

  ngOnInit() {
  }
  form: FormGroup;
  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.http.requestEssPost('auth/login', this.form.value);
    }
  }

  initForm() {
    this.form = this.builder.group({
      username: [''],
      password: [''],
      redirect: ['test']
    })
  }

}
