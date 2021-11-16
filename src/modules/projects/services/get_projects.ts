import { Service } from "typedi";
import { project } from "../../../clients/prisma_client";

@Service()
class GetProjects {
  constructor(){}

  async byUser(user: any) {
    return await project.findMany({
      where: {
        userId: user.id
      },
    });
  }
}

export default GetProjects;
