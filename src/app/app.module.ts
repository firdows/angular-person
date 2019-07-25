import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//----
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
