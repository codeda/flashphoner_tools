export interface StreamOptions {

  constraints: MediaStreamConstraints;
  receiveAudio?: boolean;
  receiveVideo?: boolean;
  playWidth?: number;
  playHeight?: number;
  mediaProvider?: string;
  record?: boolean;
  cacheLocalResources?: boolean;
  display: HTMLElement;
  custom?: any;
  flashBufferTime?: number;
  stripCodecs?: Array<string>;
  rtmpUrl?: string;
  mediaConnectionConstraints?: any;
  flashShowFullScreenButton?: boolean;
  name: string;

}
