import { Routes, RouterModule } from '@angular/router';
import { AppUrl } from './app.url';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';

const RouteLists: Routes = [
    { path: AppUrl.Home, component: HomeComponent },
    { path: AppUrl.Person, component: PersonComponent },
    // { path: AppUrl.Login, component: LoginComponent },
    // { path: AppUrl.Register, component: RegisterComponent },
    // { path: AppUrl.Authen, loadChildren: './authentication/authentication.module#AuthenticationModule' },
];

export const AppRouting = RouterModule.forRoot(RouteLists);