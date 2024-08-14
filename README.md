# ShooterMicrofrontends

## This is the project setup:
- Java JDK 22.0.1
- Springboot 3.3.0
- Apache Maven 3.9.6
- Angular 18.1.1
- Node 22.6.0
- Postgress DB

## This is example I followed to build the application:
(https://nx.dev/recipes/angular/dynamic-module-federation-with-angular)

## Steps followed:

Creating my workspace using this command: `npx create-nx-workspace shooter-microfrontends`

Pick the Angular stack, Integrated Monorepo layout and the webpack bundle, choose default for the rest of the promts

I then proceeded to create the Host application called Dashboard `nx g @nx/angular:host apps/dashboard --prefix=shooter-microfrontends`
It acts as a host application for the Micro-Frontends

Following that I started creating the Microfrontends to be consumed by Dashboard
`nx g @nx/angular:remote apps/add-shooter --prefix=shooter-microfrontends --host=dashboard`
`nx g @nx/angular:remote apps/edit-shooter --prefix=shooter-microfrontends --host=dashboard`
`nx g @nx/angular:remote apps/shooter-card --prefix=shooter-microfrontends --host=dashboard`

The generator performed the following changes to automatically link these microfrontends to the Dashboard:

Added the remote to the apps/dashboard/module-federation.config.ts file
Added a TypeScript path mapping to the root tsconfig file
Added a new route to the apps/dashboard/src/app/app.routes.ts file

## libs\shooter-form 
It contains shared resources of add-shooter and edit-shooter(the services, logic and helper), the shooter entity.
The helper class creates a deep-copy of the Formgroup shooter-form

## Run the application with
`nx serve dashboard`