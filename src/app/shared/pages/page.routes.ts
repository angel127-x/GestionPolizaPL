import { Routes } from "@angular/router";
import { authGuard } from "../../core/guards/auth.guard";

export const routes : Routes = [
    {
        canActivate: [authGuard],
        path: "",
        loadChildren: () => import("./usuario/usuario.routes").then(m => m.routes)
    },
    {
        path: "usuarioForm",
        loadComponent: () => import("./usuario/usuario-form/usuario-form.component").then(m => m.UsuarioFormComponent)
    }
]