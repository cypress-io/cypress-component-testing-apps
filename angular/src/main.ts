import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { worker } from './mocks'

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass',
});

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));