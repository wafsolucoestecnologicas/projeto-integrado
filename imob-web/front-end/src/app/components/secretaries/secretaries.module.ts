import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariesRoutingModule } from './secretaries-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListSecretariesComponent } from './list-secretaries/list-secretaries.component';
import { SecretariesResolver } from './shared/resolvers/secretaries.resolver';

@NgModule({
    declarations: [
      ListSecretariesComponent
    ],
    imports: [
      CommonModule,
      SecretariesRoutingModule,
      SharedModule
    ],
    providers: [
      SecretariesResolver
    ]
})
export class SecretariesModule {}
