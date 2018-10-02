export interface CallOptions {

  callee: string;
  visibleName?: string;
  constraints: MediaStreamConstraints;
  mediaProvider: string;
  receiveAudio?: boolean;
  receiveVideo?: boolean;
  cacheLocalResources?: boolean;
  localVideoDisplay: HTMLElement;
  remoteVideoDisplay: HTMLElement;
  custom?: any;
  stripCodecs?: Array<string>;

}
