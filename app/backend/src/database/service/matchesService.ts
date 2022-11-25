import Matches from '../models/Matches';
import Team from '../models/Teams';

// const matchesServiceGetAll = async (): Promise<{ matches: Matches[] }> => {
//   const matches = await Matches.findAll({
//     include: [{ model: Team }],
//   });

//   console.log('🚀 ~ line 8 ~ matchesServiceGetAll ~ matches', matches);

//   return { matches };
// };

const matchesServiceGetAll = async (): Promise<{ matches: Matches[] }> => {
  const matches = await Matches.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return { matches };
};

// const matchesServiceGetAll = async (): Promise<{ matches: Matches[] }> => {
//   const matches = await Matches.findAll();
//   return { matches };
// };

export default matchesServiceGetAll;
