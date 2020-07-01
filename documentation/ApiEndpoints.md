# List of needed api end points

## github list of end points

`https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation`

## data.nba.net api

`http://data.nba.net/10s/prod/v1/today.json`

## Full List of League Games

`http://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2019/league/00_full_schedule.json`

[Readme on what the keys mean](https://github.com/rlabausa/nba-schedule-data)

## Play by play data

`http://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2019/scores/pbp/0021900038_full_pbp.json`

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
