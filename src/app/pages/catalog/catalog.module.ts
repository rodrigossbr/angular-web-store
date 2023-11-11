import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogRoutingModule} from './catalog-routing.module';
import {CatalogPageComponent} from './pages/catalog-page/catalog-page.component';
import {LayoutsModule} from "../../core/layouts/layouts.module";
import {SharedModule} from "../../shared/shared.module";
import {HeaderListOptionsComponent} from "./components/header-list-options/header-list-options.component";


@NgModule({
  declarations: [
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    LayoutsModule,
    SharedModule,
    HeaderListOptionsComponent
  ]
})
export class CatalogModule {
}
