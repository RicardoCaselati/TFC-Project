interface IMatch {
  id?: number;
  homeTeam: string;
  awayTeam: string;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
}

interface IRound {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export default IMatch;

export {
  IRound,
};
