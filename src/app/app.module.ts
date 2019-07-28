import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//----
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    PersonCreateComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
