import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import localEsVe from '@angular/common/locales/es-VE'

registerLocaleData(localEsVe)

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    {provide: LOCALE_ID, useValue: 'es-VE'}
  ]
};
