export interface FlashphonerConfig {

  mediaProvidersReadyCallback?: () => void;
  flashMediaProviderSwfLocation?: string;
  preferredMediaProvider?: string;
  preferredMediaProviders?: Array<string>;
  receiverLocation?: string;
  decoderLocation?: string;
  screenSharingExtensionId?: string;
  constraints?: any;
  logger?: any;

}
