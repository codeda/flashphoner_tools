import { Sdp } from './sdp.interface';
import { Call } from './call.interface';
import { StreamOptions } from './stream-options.interface';
import { CallOptions } from './call-options.interface';
import { Stream } from './stream.interface';
import { SessionStatus } from './session-status.enum';

export interface Session {

  createCall(options: CallOptions, sdpHook?: (sdp: Sdp) => void): Call;
  createStream(options: StreamOptions, sdpHook?: (sdp: Sdp) => void): Stream;
  disconnect(): void;
  getServerUrl(): string;
  getStream(id: string): Stream;
  getStreams(): Array<Stream>;
  id(): string;
  on(event: SessionStatus, callback: (session: Session) => void): Session;
  sendData(data: any): Promise<any>;
  startDebug(): void;
  status(): SessionStatus;
  stopDebug(): void;
  submitBugReport(reportObject: any): void;
  

}
