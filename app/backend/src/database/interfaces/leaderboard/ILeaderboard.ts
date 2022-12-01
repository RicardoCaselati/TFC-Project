interface ILeaderboardHome {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

interface ITest {
  homeObject: {
    name: string;
    totalPoints: number;
    totalGames: number;
    totalVictories: number;
    totalDraws: number;
    totalLosses: number;
    goalsFavor: number;
    goalsOwn: number;
    goalsBalance: number;
    efficiency: number;
  },
  awayObject: {
    name: string;
    totalPoints: number;
    totalGames: number;
    totalVictories: number;
    totalDraws: number;
    totalLosses: number;
    goalsFavor: number;
    goalsOwn: number;
    goalsBalance: number;
    efficiency: number;
  }
}

export {
  ILeaderboardHome,
  ITest,
};
