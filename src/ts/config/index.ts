import { InjectionToken } from '@angular/core';

import { FlashphonerConfig } from './flashphoner.config';
import { SessionConfig } from './session.config';

export interface Config {

  flashphoner?: FlashphonerConfig;
  session: SessionConfig;
  debug?: boolean

}

export const CONFIG = new InjectionToken<Config>('config');
