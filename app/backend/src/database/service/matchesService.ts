import Matches from '../models/Matches';
import Team from '../models/Teams';

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

export {
  matchesServiceGetAll,
  matchesServiceGetProgress,
};
