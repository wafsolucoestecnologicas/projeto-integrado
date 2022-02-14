import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./components/authentication/authentication.module').then(
                (module) => module.AuthenticationModule
            )
    },
    {
        path: 'content',
        loadChildren: () =>
            import('./components/templates/templates.module').then(
				(module) => module.TemplatesModule
			)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
