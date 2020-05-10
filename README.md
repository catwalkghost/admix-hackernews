# Hacker News Reader 
The app fetches recent and top stories for Hacker News (using HN Api) and displays them in a paginated table.
A user can switch between viewing Top and Recent news.

The amount of news pieces is limited to 15, as it was specified in the mock-up.

## Installation

In the project directory, you can run:

### `yarn start`

or

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`
or
### `npm build`

Please note that the app uses react-app-rewired. Additional settings, including LESS Loader settings, can be found in config-overrides.js

## File Structure

App's components and pages are located in the views folder. The components are, in turn, arranged  in the Layout.js
Const.js contains antd table configuration data, endpoints, as well as all hardcoded mock-up data. This is done so the app's functionality can be extended using real API and programmatically controlled data.
Net.js contains methods of obtaining data from HN Api.
utils.js contains utilities mainly used for error handling.

 
## Style
The App uses Ant Design components. Styles are customised/overriden in misc.scss. Note, this file needs refactoring to lift it to the production level of quality. 
