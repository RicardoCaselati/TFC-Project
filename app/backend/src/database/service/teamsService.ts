import Team from '../models/Teams';

// const teamsGetAll = async (): Promise<{
//   type: number | null,
//   teams: { id: number, teamName: string }[]
// }> => {
//   const teams = await Team.findAll();

//   const test = { type: null, teams };

//   return test;
// };

const teamsServiceGetAll = async (): Promise<{ teams: { id: number, teamName: string }[] }> => {
  const teams = await Team.findAll();

  return { teams };
};

export default teamsServiceGetAll;
