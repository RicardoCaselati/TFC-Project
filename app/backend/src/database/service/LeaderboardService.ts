import ILeaderboardHome from '../interfaces/leaderboard/ILeaderboard';
import Sequelize from '../models/index';
// import { Op } from 'sequelize';
// import Matches from '../models/Matches';
// import Team from '../models/Teams';

// let teamProfile: ILeaderboardHome;

const myQuery = `SELECT t.team_name AS 'name',

SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 3 ELSE 0 END ) +
  SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ) AS totalPoints,

COUNT( m.home_team ) AS totalGames,

(SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END ) -
  SUM(CASE WHEN m.in_progress = 1 THEN 1 ELSE 0 END)) AS totalVictories,

SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ) AS totalDraws,

SUM( CASE WHEN m.home_team_goals < m.away_team_goals THEN 1 ELSE 0 END ) AS totalLosses,

SUM(m.home_team_goals) AS goalsFavor,

SUM(m.away_team_goals) AS goalsOwn,

(SUM(m.home_team_goals)-SUM(m.away_team_goals)) AS goalsBalance,

ROUND(((SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END )*3 +
  SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ))/
  (COUNT(m.home_team) * 3)) * 100, 2) AS efficiency

FROM TRYBE_FUTEBOL_CLUBE.matches AS m
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS t ON t.id = m.home_team
WHERE m.in_progress = 0 
GROUP BY t.team_name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn;`;

const leaderboardServiceGetAll = async (): Promise<{
  teamProfile: ILeaderboardHome[] | unknown;
}> => {
  const [teamProfile] = await Sequelize.query(myQuery);
  return { teamProfile };
};

// const myQuery = `SELECT t.team_name AS 'name',
// (SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END )*3+
//   SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END )) AS totalPoints,
// SUM(CASE WHEN m.in_progress = 1 THEN 0 ELSE 1 END) AS totalgames,
// SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END ) AS totalVictories,
// SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ) AS totalDraws,
// SUM( CASE WHEN m.home_team_goals < m.away_team_goals THEN 1 ELSE 0 END ) AS totalLosses,
// SUM(m.home_team_goals) AS goalsFavor,
// SUM(m.away_team_goals) AS goalsOwn,
// (SUM(m.home_team_goals)-SUM(m.away_team_goals)) AS goalsBalance,
// ROUND(((SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END )*3+
//   SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ))/
//   (COUNT(m.home_team) * 3)) * 100, 2) AS efficiency
// FROM TRYBE_FUTEBOL_CLUBE.matches AS m
// INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS t ON t.id = m.home_team
// GROUP BY t.team_name
// ORDER BY totalPoints DESC, totalVictories, goalsBalance DESC, goalsFavor DESC, goalsOwn;`;

// const leaderboardServiceGetAll = async (): Promise<{ teamProfile: Matches[] }> => {
// Matches.sum('inProgress', { where: { inProgress: { [Op.not]: true } } });
// const teamProfile = await Matches.findAll({
//   include: [
//     { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
//     { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
//   ],
// });
// return { teamProfile };
// };

export default leaderboardServiceGetAll;
