import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule), // <-- fournit HttpClient
    provideRouter([]) // <-- fournit le router
  ]
});
