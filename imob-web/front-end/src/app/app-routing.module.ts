import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./components/authentication/authentication.module').then(
                (module) => module.AuthenticationModule
            )
    },
    {
        path: 'properties-for-sale/:cnpj',
        loadChildren: () =>
            import('./components/properties-for-sale/properties-for-sale.module').then(
                (module) => module.PropertiesForSaleModule
            )
    },
    {
        path: 'content',
        canActivate: [AuthenticationGuard],
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
