# Blazers Pre-Post-Game 

### A React build of the TailBlazers Pre, live, and Post game pages. 
### _Created by, Alysia Petti, Alex Shreen, Dusty McCord. June, 2020_

## Work Log

- Started building out the following components.
  	- Hero
  	- NewsFeed
  	- KeyPlayers

- Still need to find the correct API endpoint for KeyPlayer data.
- Created a reusable Header Bar component in /js/Shared/HeaderBarTemplate.js
  - pass `title={'title you want'}` and the component should render out a title bar. 

## Links to Designs

### Pre-Game 

[Desktop](https://david292023.invisionapp.com/public/share/TY14YQQQ9D#/screens/477788930/comments)

[Mobile](https://david292023.invisionapp.com/public/share/S214YQQ0MR#/screens/477807334/comments)

### Live Game

[Desktop](https://david292023.invisionapp.com/public/share/5J14YQQRCM#/screens/477788849/comments)

[Mobile](https://david292023.invisionapp.com/public/share/DQ14YSRT6S#/screens/477789211)

## API Endpoints  

Here is some reference code from the original code. 
This code block seems to be making the bulk of all the api calls. 

**[Reference link to original code](./documentation/oldApiCode.md)**

### <u>Player data</u>

 **Note the ${gameId} at end of url** 

```html
https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/scores/gamedetail/${GameId}_gamedetail.json

```

*this is a working test url for postman*

```
https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/scores/gamedetail/0011900023_gamedetail.json
```

### <u>News Feed TrailBlazers API</u>

This is an example of what this api returns. [Example Json Data](./documentation/Highlights_sample.md)

```html
https://www.nba.com/blazers/api/1.1/json

```



### <u>News Feed API with video</u>

```html
https://www.nba.com/blazers/api/1.1/json/?type=video&channels=highlights
```

### <u>API Link for Schedule</u>

```html
https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/teams/trail_blazers_schedule_02.json
```

### <u>API for game recap</u>

```
https://api.nba.net/2/blazers/article/?games=0011900023&freeform=recap
```

**_must use this header to use this api call_**

```
headers: {
  "AccessToken": "internal|bb88df6b4c2244e78822812cecf1ee1b"
  },
```



## Useful Links

## Get logo

town should be three letter

`https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/${town}.gif`

## Get full body image

player.id is a string of numbers

`https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${player.id}.png`

## Get head shot

player.id is a string of numbers

`http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/${player.id}.png`

## Installation instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Clone the repo wil

  ```shell
  git clone <Link to repo>
  ```

- Navigate to your new directory by typing:

  ```shell
  cd pre-post-game
  ```

- Run npm install to get all needed modules

  ```shell
  npm install	
  ```

- Run production server with the following command:

  ```shell
  npm run start
  ```

## Folder Structure

Below is an overview of each folder/file's purpose and recommended management style of new implementations:

```
/PRE-POST-GAME/
|
|-- /node_modules/
|-- /documentation
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
|       		|-- /Shared/                # components that will live in many places.
|       			|-- headerBarTemplate.js  # Header Bar that is used between every component.
|       		|-- /PreGame/               # Components specific to PreGame
|       			|-- /ArenaInfo/
|								|-- index.js
|       			|-- /CTA/
|								|-- index.js
|       			|-- /Footer/
|								|-- index.js
|       			|-- /Hero/
|								|-- index.js
|       			|-- /KeyPlayers/
|								|-- index.js
|								|-- player.js						# Player details to be listed out.
|								|-- tempData.js					# Stand in data for mockup
|       			|-- /NewsFeed/
|								|-- index.js
|								|-- NewItem.js					# Single news item to be listed out.
|       			|-- /UpcomingGames/
|								|-- index.js
|       |-- App.js
|       |-- App.test.js
|       |-- serviceWorker.js
|       |-- setupTests.js
|       |-- simpleLinks.js							# For Development. links to other component views
|   |-- /scss/
|				|-- /abstracts/
|           |-- _mixins.scss            # Storing responsive styling
|           |-- _variables.scss         # Brand colors
|				|-- /base/
|           |-- _cssReset.scss          # Zero out defaults
|           |-- _base.scss              # Base styles for site
|           |-- _alert-message.scss     # Styling for alert error messages
|				|-- /components/
|           |-- _app.scss          			# Styles for app component
|           |-- _header-bar-template.scss            
|           |-- _key-players.scss       
|           |-- _news-feed.scss
|           |-- _pre-game-index.scss
|				|-- main.scss										# Imports _mixins, _variables, _cssReset, _base, _alert-message
|   |-- index.partial.html              # HTML used for the .append() in script.js
|   |-- index.template.html
|
|   .gitignore
|   package-lock.json                   # Handled by .gitignore
|   package.json
|   README.md
|   yarn.lock
```
