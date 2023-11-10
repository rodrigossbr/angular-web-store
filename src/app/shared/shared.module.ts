import { NgModule } from '@angular/core';
import {HttpModule} from './http/http.module';
import {ApiModule} from "./api/api.module";

@NgModule({
  declarations: [],
  imports: [
    ApiModule,
    HttpModule
  ]
})
export class SharedModule { }
