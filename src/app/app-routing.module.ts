import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';
const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'active',
        loadChildren: () =>
            import('./components/active/active.module').then(
                (m) => m.ActiveModule
            ),
            canActivate: [authGuard]
    },
    {
        path: 'inactive',
        loadChildren: () =>
            import('./components/inactive/inactive.module').then(
                (m) => m.InactiveModule
            ),
            canActivate: [authGuard]
    },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
