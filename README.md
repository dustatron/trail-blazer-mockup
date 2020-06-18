This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn scss`

This will compile, watch and output any scss into css. Used strictly for watching with updates and changes to make sure styles are being compiled appropriately and handles any syntax error prompts.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Folder Structure

Below is an overview of each folder/file's purpose and recommended management style of new implementations:

```
/PRE-POST-GAME/
|
|-- /node_modules/
|
|-- /public/
|   |-- index.html
|   |-- manifest.json
|   |-- robots.txt
|
|-- /src/                               # Source files
|   |-- /css/
|       |-- App.css
|       |-- index.css
|   |-- /media/
|   |-- /js/
|       |-- /components/                # Where all .js/.jsx components will live
|       |-- App.js
|       |-- App.test.js
|       |-- serviceWorker.js
|       |-- setupTests.js
|   |-- /scss/
|       |-- _adStyles.scss              # SRFC specific - may not apply to LA Galaxy
|       |-- _cardButtons.scss           # Button panel and buttons styles associated within the panels
|       |-- _cardDetails.scss           # Event details for both front and back of card
|       |-- _eventFlag.scss             # Top left corner flag that can be used for icon labeling
|       |-- _eventPromo.scss            # Promo styles for promotional details on back of cards
|       |-- _familyDay.scss             # SRFC promo specific - may not apply to LA Galaxy depending on their event promotions
|       |-- _global.scss                # Global associated styles - functional styles from JS
|       |-- _header.scss                # Card headings for home/away events - may not apply to LA Galaxy SGT page
|       |-- _localEnvironment.scss      # Local Environment specific styles - feel free to add to this!
|       |-- _logos.scss                 # Logo styles for all cards
|       |-- _monthHeading.scss          # Month Heading styles
|       |-- _ticketCard.scss            # Card styles for each event/game
|       |-- _variables.scss             # LA Galaxy Color Palette
|       |-- style.scss
|   |-- index.partial.html              # HTML used for the .append() in script.js
|   |-- index.template.html
|
|   .gitignore
|   package-lock.json                   # Handled by .gitignore
|   package.json
|   README.md
|   yarn.lock
```