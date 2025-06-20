// src/app/app.config.ts
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule }        from '@angular/router';
import { routes }              from './app.routes';

export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(routes)    // <— aqui
    )
  ]
};
