/** Import all the params & responses from the services. */
export type LeaguesParams = {
  endpoint: string;
};

export type League = {
  name: string;
  start_date: string;
  end_date: string;
};

export type LeagueArray = {
  league: League[];
};
