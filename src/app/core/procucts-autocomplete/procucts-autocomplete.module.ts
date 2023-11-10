import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAutocompleteComponent } from './components/products-autocomplete/products-autocomplete.component';
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ProductsAutocompleteComponent
  ],
  exports: [
    ProductsAutocompleteComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ProcuctsAutocompleteModule { }
