import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {ProductsAutocompleteModule} from "../procucts-autocomplete/products-autocomplete.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    HeaderPageComponent,
  ],
  exports: [
    HeaderPageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    ProductsAutocompleteModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HeaderPageModule { }
