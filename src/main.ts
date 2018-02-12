// bootstrap angular app into browser

import {platformBrowserDynamic} 
        from '@angular/platform-browser-dynamic';
        
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

import { enableProdMode } from '@angular/core';

console.log("ENV", environment);
 
// bootstrap app module into browser

platformBrowserDynamic()
    .bootstrapModule(AppModule)