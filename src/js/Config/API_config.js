///////////////////////////////////////////////
/////////////////////////// Pre Game /////////
/////////////////////////////////////////////

// --->  Key Players Component
export const ApiKeyPlayers = (
  season = '2019',
  seasonType = '02',
  teamName = 'trail_blazers'
) => {
  // Document page 45
  return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${season}/teams/statistics/${teamName}/leaders_${seasonType}.json`;
};

// --->  Upcoming games Component
/* 
  01 – Preseason
  02 – Regular Season
  03 – All-star (supported for East/West and Rookie/Sophomore game) 04 – Playoffs
  */

// This provides pricing data and links to ticketmaster.
// This was take from older code
export const ApiBuyTickets = () => {
  return 'https://buyblazertickets.com/includes/jsonp.php';
};

// This provides game schedule
// Currently commented out.
export const ApiSchedule = (
  season = '2019',
  team = 'trail_blazers',
  seasonType = '02'
) => {
  // Documentation page 30.
  return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${season}/teams/${team}_schedule_${seasonType}.json`;
};

// --->  News Feed Component
// taken from old code. No Documentation.
export const ApiNewsFeed = (team = 'blazers') => {
  return `https://cors-anywhere.herokuapp.com/https://www.nba.com/${team}/api/1.1/json`;

  // will return cors error
  // return `https://www.nba.com/${team}/api/1.1/json`;
};

// --->  ArenaInfo Component

export const ApiGoogleMapLink = () =>
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.9322531260436!2d-122.66903634831682!3d45.53156883686318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a752d90af2bd%3A0xac4da428b0c0c9a7!2sModa%20Center!5e0!3m2!1sen!2sus!4v1593541057339!5m2!1sen!2sus';

// The blurb at the bottom of ArenaInfo is a placeholder

/////////////////////////////////////////////
/////////////////////// Live Game ///////////
////////////////////////////////////////////

// --->  LiveHero Component
// Placeholder at this time.

// --->  Court Component
// Mock up only

// --->  LiveCTA Component
// Score and other info is placeholder.

// provides team logos.
export const ApiImageLink = (teamName = 'blazers') => {
  return `https://nba.com/blazers/sites/blazers/files/${teamName}.png`;
};

// --->  LiveStats Component

/// ==> BoxScores

export const ApiBoxScores = (currentGameId) => {
  // Documentation pages 11
  return `https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/scores/gamedetail/${currentGameId}_gamedetail.json`;
};

/// ==> TeamLeaders

export const ApiTeamLeaders = (
  season = '2019',
  teamName = 'trail_blazers',
  seasonType = '02'
) => {
  // Documentation on page 43
  return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${season}/teams/statistics/${teamName}/leaders_${seasonType}.json`;
};

/// ==> TeamStatistics

export const ApiTeamStats = (
  season = '2019',
  teamName = 'trail_blazers',
  seasonType = '02'
) => {
  // Documentation on page 40
  return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${season}/teams/statistics/${teamName}/teamstats_${seasonType}.json`;
};

/// ==> WinVLose
export const ApiWinLosses = (
  season = '2019',
  leagueId = '00',
  seasonType = '02'
) => {
  // Documentation on page 17
  return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${season}/${leagueId}_standings_${seasonType}.json`;
};
