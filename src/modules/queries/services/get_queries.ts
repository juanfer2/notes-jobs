import { Service } from "typedi";
import { query } from "../../../clients/prisma_client";

@Service()
class GetProjects {
  constructor(){}

  async byUser(user: any, projectId: any) {
    return await query.findMany({
      where: {
        projectId: projectId
      },
    });
  }
}

export default GetProjects;
