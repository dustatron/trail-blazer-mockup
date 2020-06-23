# List of needed api link

## Player data

`https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/scores/gamedetail/0011900023_gamedetail.json`

### to use update the end with

```
_/${GameId}_gamedtails.json_
```

## News Feed TrailBlazers API

`https://www.nba.com/blazers/api/1.1/json`

## News Feed API with video

`https://www.nba.com/blazers/api/1.1/json/?type=video&channels=highlights`

## API Link for Schedule

`https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/teams/trail_blazers_schedule_02.json`

## API for game recap

`https://api.nba.net/2/blazers/article/?games=0011900023&freeform=recap`
_--- must use this header to use this api call ---_

```
headers: {
  "AccessToken": "internal|bb88df6b4c2244e78822812cecf1ee1b"
  },
```
