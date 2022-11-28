import Team from '../models/Teams';

const teamsServiceGetAll = async (): Promise<{ teams: { id: number, teamName: string }[] }> => {
  const teams = await Team.findAll();

  return { teams };
};

const teamsServiceGetById = async (idParam: number): Promise<{
  team: { id: number, teamName: string } | null
}> => {
  const team = await Team.findByPk(idParam);

  return { team };
};

export {
  teamsServiceGetAll,
  teamsServiceGetById,
};
