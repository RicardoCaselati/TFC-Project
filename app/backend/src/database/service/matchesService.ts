import Matches from '../models/Matches';
import Team from '../models/Teams';
import IMatches from '../interfaces/matches/IMatches';

const matchesServiceGetAll = async (): Promise<{ matches: Matches[] }> => {
  const matches = await Matches.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return { matches };
};

const matchesServiceGetProgress = async (
  queryParam: string,
): Promise<{
  matches: Matches[]
}> => {
  const queryConvParam = ((query: string) => {
    if (query === 'true') return 1;
    return 0;
  });

  const matches = await Matches.findAll({
    where: { inProgress: queryConvParam(queryParam) },
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return { matches };
};

const matchesServiceInPutMatch = async (matchParam: IMatches): Promise<{ newMatch: Matches }> => {
  const {
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  } = matchParam;
  const newMatch = await Matches.create({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  });

  return { newMatch };
};

const matchesServiceUpdateMatch = async (id: number) => {
  await Matches.update(
    { inProgress: false },
    { where: { id } },
  );
  const response = { message: 'Finished' };
  return response;
};

export {
  matchesServiceGetAll,
  matchesServiceGetProgress,
  matchesServiceInPutMatch,
  matchesServiceUpdateMatch,
};
