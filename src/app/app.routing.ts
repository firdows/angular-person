import { Routes, RouterModule } from '@angular/router';
import { AppUrl } from './app.url';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { LoginComponent } from './components/login/login.component';

const RouteLists: Routes = [
    { path: AppUrl.Home, component: HomeComponent },
    { path: AppUrl.PersonCreate, component: PersonCreateComponent },
    { path: "login", component: LoginComponent },
    {
        path: AppUrl.Person, component: PersonComponent,
        children: [
            {
                path: AppUrl.PersonCreate,
                component: PersonCreateComponent,
            }
        ]
    }
    // { path: AppUrl.Login, component: LoginComponent },
    // { path: AppUrl.Register, component: RegisterComponent },
    // { path: AppUrl.Authen, loadChildren: './authentication/authentication.module#AuthenticationModule' },
];

export const AppRouting = RouterModule.forRoot(RouteLists);