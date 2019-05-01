// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  isHostedOnNodeJsServer:true,
  apiGatewayHost: 'localhost:4000',
  apiUrl: 'http://localhost:4000/', 


  serverUrl: 'http://localhost:4000',
  appName: 'projectAzul',
  ssoLoginPageUrl: 'http://localhost:4300',
  ssoUrl: 'http://localhost:8082',
  ssoWebsocketUrl:  'ws://localhost:8082/socket',
  logLevel:'DEBUG'};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
