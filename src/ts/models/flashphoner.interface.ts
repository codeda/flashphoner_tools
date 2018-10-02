import { FlashphonerConfig } from './../config/flashphoner.config';
import { MediaDevice } from './media-device.interface';
import { Session } from './session.interface';
import { SessionConfig } from './../config/session.config';

export interface Flashphoner {

  createSession(options: SessionConfig): Session;
  init(config: FlashphonerConfig): void;
  getLogger(): any;
  getMediaAccess(constraints: MediaStreamConstraints, display: HTMLElement, mediaProvider: string): Promise<HTMLElement>;
  getMediaDevices(mediaProvider: string | undefined, labels: boolean | undefined, kind: string): Promise<Array<MediaDevice>>;
  getMediaProviders(): Array<string>;
  getSession(id: string): Session;
  getSessions(): Array<Session>;
  playFirstSound(noise: boolean): void;
  playFirstVideo(): void;
  releaseLocalMedia(display: HTMLElement, mediaProvider?: string): boolean;


}
