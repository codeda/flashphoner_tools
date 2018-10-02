export interface Call {

  call(): void;
  callee(): string;
  caller(): string;
  getStats(callback: (stats: any) => void): void;
  getVolume(): number;
  hangup(): void;
  hold(): void;
  id(): string;
  isAudioMuted(): boolean;
  isVideoMuted(): boolean;
  muteAudio(): void;
  muteVideo(): void;
  on(event: string, callback: (...args) => void): Call;
  sendDTMF(number: number, type?: string): void;
  setAudioOutputId(id: string): void;
  setAudioOutputId(id: string): void;
  setVolume(volume: number): void;
  status(): string;
  switchCam(): void;
  switchMic(): void;
  transfer(target: string): void;
  unhold(): void;
  unmuteAudio(): void;
  unmuteVideo(): void;
  visibleName(): string;

}
