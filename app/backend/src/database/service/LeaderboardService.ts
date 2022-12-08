import ILeaderboardHome from '../interfaces/leaderboard/ILeaderboard';
import Sequelize from '../models/index';
import homeTeamQuery from './utils/leaderBoardHome';
import awayTeamQuery from './utils/leaderBoardAway';
// import test from './utils/leaderBoard.functions';
// const leaderboardServiceGetAll = async (): Promise<{ matches: Matches[] }> => {
//   return { matches };
// };

const leaderboardHomeServiceGetAll = async (): Promise<{
  teamProfile: ILeaderboardHome[] | unknown;
}> => {
  const [teamProfile] = await Sequelize.query(homeTeamQuery);
  return { teamProfile };
};

const leaderboardAwayServiceGetAll = async (): Promise<{
  teamAwayProfile: ILeaderboardHome[] | unknown;
}> => {
  const [teamAwayProfile] = await Sequelize.query(awayTeamQuery);
  return { teamAwayProfile };
};

const reOrderFunction = (objToReturn: ILeaderboardHome[]) => {
  const obj = objToReturn.sort((a, b) =>
    b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor);
  return obj;
};

const calc = (eachItem: ILeaderboardHome, team: ILeaderboardHome) => {
  const totalPoints = Number(eachItem.totalPoints) + Number(team.totalPoints);
  const totalGames = Number(eachItem.totalGames) + Number(team.totalGames);
  const { name } = eachItem;
  return {
    name,
    totalPoints,
    totalGames,
    totalVictories: Number(eachItem.totalVictories) + Number(team.totalVictories),
    totalDraws: Number(eachItem.totalDraws) + Number(team.totalDraws),
    totalLosses: Number(eachItem.totalLosses) + Number(team.totalLosses),
    goalsFavor: Number(eachItem.goalsFavor) + Number(team.goalsFavor),
    goalsOwn: Number(eachItem.goalsOwn) + Number(team.goalsOwn),
    goalsBalance: Number(eachItem.goalsBalance) + Number(team.goalsBalance),
    efficiency: ((totalPoints / (totalGames * 3)) * 100).toFixed(2),
  };
};

const teamsToLeaderboard = (homeTeams: ILeaderboardHome[], awayTeams: ILeaderboardHome[]) => {
  const objMap: ILeaderboardHome[] = homeTeams.map((eachItem) => {
    const { name } = eachItem;
    const team = awayTeams.find((awayTeam) => awayTeam.name === name);
    console.log('🚀 ~ homeTeams.map ~ team', team);
    if (!team) throw new Error('time não encontrado');
    return calc(eachItem, team);
  });
  return reOrderFunction(objMap);
};

const leaderboardServiceGetAll = async (): Promise<ILeaderboardHome[]> => {
  const { teamProfile } = await leaderboardHomeServiceGetAll();
  const { teamAwayProfile } = await leaderboardAwayServiceGetAll();
  const homeTeams = teamProfile as ILeaderboardHome[];
  const awayTeams = teamAwayProfile as ILeaderboardHome[];
  const map: ILeaderboardHome[] = teamsToLeaderboard(homeTeams, awayTeams);
  return map;
};

export {
  leaderboardServiceGetAll,
  leaderboardHomeServiceGetAll,
  leaderboardAwayServiceGetAll,
};
