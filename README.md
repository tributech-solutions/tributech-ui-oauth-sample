# tributech-ui-oauth-sample

Tributech sample frontend project which simply handles the OAuth Flow with our Identity Provider

## Create Docker Image

`docker build -t tributech-ui-oauth-sample .`

## Run application

`docker run -p 4200:4200 tributech-ui-oauth-sample`

## Serve application

Open <https://localhost:4200/>

## OAuth Config

This application uses the Angular library [angular-auth-oidc-client](https://www.npmjs.com/package/angular-auth-oidc-client) for OAuth authentication.\
OAuth configuration file: `src/app/app.config.ts`\
The configuration file contains environment variables, which are outsourced to the environment.ts file.\
Environment variables: `src/environments/environment.ts`

## Environment Variables

For local development, the contents from `environment.ts` are used.\
For a production deployment, a build can be triggered that takes the contents of `environment.prod.ts` and overwrites `environment.ts`, ensuring that the application always uses the environment variables from `environment.ts`.\
Environment variables used locally: `src/environments/environment.ts`
