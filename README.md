# @codeda/flashphoner
Flashphoner implementation for Angular
# Installation
Using npm:
```
$ npm install @codeda/flashphoner
```
Using yarn:
```
$ yarn add @codeda/flashphoner
```
# Usage
1. Init ```FlashphonerModule```:
```import { FlashphonerModule } from '@codeda/flashphoner';

@NgModule({
  imports: [
    ...,
    FlashphonerModule.forRoot({
      session: {
        urlServer: ${flashphonerServerUrl}
      }
    })
  ]
})
export class AppModule {}
```
2. Create/play stream:
```
import { FlashphonerService } from '@codeda/flashphoner';

@Component(...)
export class MyComponent {

  constructor(flashphonerService: FlashphonerService) {
    // Create stream
    flashphonerService
      .createStream({
        name: ${streamName},
        display: ${someHTMLElement},
        constraints: [MediaStreamConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints)
      })
      .subscribe(stream => console.log(stream));

    // Play stream
    flashphonerService
      .playStream({
        name: ${streamName},
        display: ${someHTMLElement}
      })
      .subscribe(stream => console.log(stream));
  }

}

```
# Note
1. Requires [Flashphoner WebSDK](https://flashphoner.com/downloads/builds/flashphoner_client/wcs_api-2.0/).
2. For proper stream playing in iOS you should pass extra params to ```FlashphonerModule.forRoot``` method:
```
FlashphonerModule.forRoot({
  session: {
    flashphoner: {
      flashMediaProviderSwfLocation: ${your path to media-provider.swf},
      receiverLocation: ${your path to WSReceiver2.js},
      decoderLocation: ${your path to video-worker2.js}
    },
    urlServer: ${flashphonerServerUrl}
  }
})
```
And before calling ```flashphonerService.createStream``` use this code:
```
if (Flashphoner.getMediaProviders()[0] === 'WSPlayer') {
  Flashphoner.playFirstSound();
} else if (
  Browser.isSafariWebRTC() ||
  Flashphoner.getMediaProviders()[0] === 'MSE'
) {
  Flashphoner.playFirstVideo(options.display);
}
```
Also serve [preloader.mp4](https://github.com/codeda/flashphoner_tools/blob/master/assets/dependencies/preloader.mp4) at url path /dependencies/preloader.mp4.

[utils.js](https://github.com/codeda/flashphoner_tools/blob/master/assets/utils.js) - contains Browser;
[media-provider.swf](https://github.com/codeda/flashphoner_tools/blob/master/assets/media-provider.swf)
[WSReceiver2.js](https://github.com/codeda/flashphoner_tools/blob/master/assets/WSReceiver2.js)
[video-worker2.js](https://github.com/codeda/flashphoner_tools/blob/master/assets/video-worker2.js)
