import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';

import { FlashphonerService } from './flashphoner.service';
import {
  Config,
  CONFIG
} from './config';

@NgModule()
export class FlashphonerModule {

  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: FlashphonerModule,
      providers: [
        {
          provide: CONFIG,
          useValue: config
        },
        FlashphonerService
      ]
    };
  }

}
