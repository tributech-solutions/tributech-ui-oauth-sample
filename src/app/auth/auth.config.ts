import { SAMPLE_ENVIRONMENT } from '@sample-environment';
import { LogLevel, PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: SAMPLE_ENVIRONMENT.auth.authority,
    clientId: SAMPLE_ENVIRONMENT.auth.clientId,
    triggerAuthorizationResultEvent: true,
    logLevel: LogLevel.Debug,
    historyCleanupOff: true,
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    scope: 'openid profile offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
  },
};
