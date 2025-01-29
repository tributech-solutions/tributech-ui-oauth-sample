import { LogLevel, PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    triggerAuthorizationResultEvent: true,
    logLevel: LogLevel.Debug,
    historyCleanupOff: true,
    authority: 'https://auth.dev-x.tributech-node.com/realms/node', // 'https://auth.kreisel.dev-x.tributech-node.com/realms/kreisel',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'dataspace-admin',
    scope: 'openid profile offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
  },
};
