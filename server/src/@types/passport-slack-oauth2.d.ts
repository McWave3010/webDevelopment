declare module 'passport-slack-oauth2' {
  import { Strategy as PassportStrategy } from 'passport';
  import { Request } from 'express';

  export interface Profile {
    provider: string;
    id: string;
    displayName: string;
    user: {
      id: string;
      name: string;
      email: string;
      image_72?: string;
    };
    team: {
      id: string;
      name: string;
    };
    _raw: string;
    _json: any;
  }

  export interface StrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scope?: string[] | string;
    skipUserProfile?: boolean;
    state?: boolean;
    passReqToCallback?: boolean;
  }

  export interface StrategyOptionsWithRequest extends StrategyOptions {
    passReqToCallback: true;
  }

  export type VerifyCallback = (
    error: any,
    user?: any,
    info?: any
  ) => void;

  export class Strategy extends PassportStrategy {
    constructor(
      options: StrategyOptions,
      verify: (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ) => void
    );
    constructor(
      options: StrategyOptionsWithRequest,
      verify: (
        req: Request,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ) => void
    );
  }
}
