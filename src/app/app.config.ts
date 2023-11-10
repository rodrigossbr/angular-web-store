import {ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import {MAT_DATE_LOCALE} from "@angular/material/core";
import localePtBr from '@angular/common/locales/pt';

registerLocaleData(localePtBr, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
};
