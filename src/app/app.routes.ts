import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadChildren: () => import("./auth/auth.routes").then(m => m.routes)
    },
    {
        path: "login",
        loadComponent:()=>import("./auth/login/login.component").then(m=>m.LoginComponent)
    },
    {
        canActivate: [authGuard],
        path: "page",
        loadChildren: () => import("./shared/pages/page.routes").then(m => m.routes)
    },
    {
        path: "**",
        redirectTo: "page"
    }
];
