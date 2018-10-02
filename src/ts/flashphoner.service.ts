import {
  Injectable,
  Inject
} from '@angular/core';

import {
  StreamStatus,
  SessionStatus,
  Session,
  Flashphoner as FlashphonerI,
  StreamOptions,
  Stream
} from './models';
import {
  Config,
  CONFIG
} from './config';

import {
  Observable,
  Observer
} from 'rxjs';
// import 'flashphoner';

declare const Flashphoner: FlashphonerI;

@Injectable()
export class FlashphonerService {

  private session: Session;

  constructor(@Inject(CONFIG) private config: Config) {
    Flashphoner.init(config.flashphoner);
  }

  getSession(): Observable<Session> {
    return Observable.create((observer: Observer<Session>) => {
      if (
        this.session &&
        this.session.status() === SessionStatus.ESTABLISHED
      ) {
        observer.next(this.session);
        observer.complete();
        return;
      }

      Flashphoner
        .createSession(this.config.session)
        .on(SessionStatus.ESTABLISHED, session => {
          this.session = session;
          observer.next(session);
          observer.complete();
        });
    });
  }

  createStream(options: StreamOptions): Observable<Stream> {
    return Observable.create((observer: Observer<Stream>) => {
      this.getSession()
        .subscribe(session => {
          const stream: Stream = session.createStream(options);

          stream.on(StreamStatus.PUBLISHING, stream => {
            let track: MediaStreamTrack;
            const display: HTMLVideoElement = document.getElementById(stream.id()) as HTMLVideoElement;
            const mediaStream: MediaStream = display.srcObject as MediaStream;

            if (options.constraints.audio !== undefined) {
              track = mediaStream.getAudioTracks()[0];
            } else {
              track = mediaStream.getVideoTracks()[0];
            }

            track.onended = () => {
              stream.stop();
            };

            observer.next(stream);
            observer.complete();
          });

          if (this.config.debug === true) {
            stream
              .on(StreamStatus.FAILED, stream => {
                console.error('FAILED', stream);
              })
              .on(StreamStatus.NOT_ENOUGH_BANDWIDTH, stream => {
                console.warn('NOT_ENOUGH_BANDWIDTH', stream);
              })
              .on(StreamStatus.PLAYBACK_PROBLEM, stream => {
                console.warn('PLAYBACK_PROBLEM', stream);
              })
              .on(StreamStatus.PLAYING, stream => {
                console.log('PLAYING', stream);
              })
              .on(StreamStatus.RESIZE, stream => {
                console.warn('RESIZE', stream);
              })
              .on(StreamStatus.STOPPED, stream => {
                console.error('STOPPED', stream);
              })
              .on(StreamStatus.PAUSED, stream => {
                console.warn('PAUSED', stream);
              })
              .on(StreamStatus.UNPUBLISHED, stream => {
                console.warn('UNPUBLISHED', stream);
              });
          }

          stream.publish();
        });
    });
  }

  playStream(options: StreamOptions): Observable<Stream> {
    // if (Flashphoner.getMediaProviders()[0] === 'WSPlayer') {
    //   Flashphoner.playFirstSound(false);
    // } else if (
    //   Browser.isSafariWebRTC() ||
    //   Flashphoner.getMediaProviders()[0] === 'MSE'
    // ) {
    //   Flashphoner.playFirstVideo(config.display);
    // }

    return Observable.create((observer: Observer<Stream>) => {
      this.getSession()
        .subscribe(session => {
          const stream: Stream = session.createStream(options);

          stream.on(StreamStatus.PLAYING, stream => {
            observer.next(stream);
            observer.complete();
          });

          if (this.config.debug === true) {
            stream
              .on(StreamStatus.FAILED, stream => {
                console.error('FAILED', stream);
              })
              .on(StreamStatus.PLAYBACK_PROBLEM, stream => {
                console.warn('PLAYBACK_PROBLEM', stream);
              })
              .on(StreamStatus.RESIZE, stream => {
                console.warn('RESIZE', stream);
              })
              .on(StreamStatus.STOPPED, stream => {
                console.error('STOPPED', stream);
              })
              .on(StreamStatus.PAUSED, stream => {
                console.warn('PAUSED', stream);
              })
              .on(StreamStatus.UNPUBLISHED, stream => {
                console.error('UNPUBLISHED', stream);
              });
          }
          
          stream.play();
        });
    });
  }

}
