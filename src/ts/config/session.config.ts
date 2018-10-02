export interface SessionConfig {

  urlServer: string;
  authToken?: string;
  keepAlive?: boolean;
  lbUrl?: string;
  flashProto?: string;
  flashPort?: number;
  appKey?: string;
  custom?: any;
  sipOptions?: any;
  mediaOptions?: any;

}
