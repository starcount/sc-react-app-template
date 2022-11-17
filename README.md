# Starcount React Client Template

A template for new Starcount client projects. It is an updated version of the new-app-framework project

## General Information

Project includes a react starter template with sass styling configured and Auth0 with Single Sign-on support. It's a
starter template for new client projects.

## Technologies Used

- React 17.x
- React Router 5x
- Auth0
- Sass
- Jest (React Testing Library)

## File Structure
- `src` - contains all the source code for the project
  - `assets ` - contains all the static assets for the project
    - `icons` - contains all the icons for the project
    - `images` - contains all the images for the project
  - `components` - contains all the components for the project
    - `atoms` - contains all the atomic components for the project e.g buttons, inputs, etc.
    - `containers` - contains all the container components for the project e.g. auth container etc.
    - `layout` - contains all the template components for the project e.g. page, dashboard etc.
    - `molecules` - contains all the molecular components for the project e.g forms, navbar etc.
    - `organisms` - contains all the organism components for the project e.g hero, footer. header etc.
    - `routes` - contains all the route components for the project e.g. protected, public etc.
  - `hooks` - contains all the custom hooks for the project
  - `interfaces` - contains all the interfaces for the project
  - `pages` - contains all the pages for the project
  - `services` - contains all the api services for the project
  - `styles` - contains all the styles for the project
  - `utils` - contains all the utility functions for the project

## Setup Info

### Auth0

- Set up a new Auth0 client for the app to use in the [Auth0
  dashboard](https://manage.auth0.com/dashboard/us/starcount/clients)
- Add the following config to your environment variables inside your env file:
  - AUTH0_DOMAIN - your Auth0 domain URL
  - AUTH0_CLIENT_ID - your Auth0 clientID
  - AUTH0_CALLBACK_URL - your Auth0 callback URL
  - AUTH0_AUDIENCE - your Auth0 audience URL

### API
- Add the API url to your environment variables inside your env file:
  - API_URL - your API url

### React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

### Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
