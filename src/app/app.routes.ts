import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '**', component: NopagefoundComponent     } // cualquier ruta que no este definida anteriormente
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
