import { StreamStatus } from './stream-status.enum';

export interface Stream {

  available(): Promise<boolean>;
  fullScreen(): void;
  getInfo(): string;
  getNetworkBandwidth(): number;
  getRecordInfo(): string;
  getRemoteBitrate(): number;
  getStats(callback: (...args) => void): any;
  getVolume(): number;
  id(): string;
  isAudioMuted(): boolean;
  isVideoMuted(): boolean;
  muteAudio(): void;
  muteVideo(): void;
  name(): string;
  on(event: StreamStatus, callback: (stream: Stream) => void): Stream;
  play(): void;
  publish(): void;
  published(): boolean;
  setMicrophoneGain(): void;
  setVolume(volume: number): void;
  snapshot(): void;
  status(): StreamStatus;
  stop(): void;
  switchCam(): void;
  switchMic(): void;
  switchToCam(): void;
  switchToScreen(): void;
  unmuteAudio(): void;
  unmuteVideo(): void;
  videoResolution(): any;

}
