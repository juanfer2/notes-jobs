import { Service } from "typedi";
import { project } from "../../../clients/prisma_client";

export const updateProject = async(project: any, id: number) => {
  await project.update({
    where: {
      id: id
    },
    data: project,
  })
}

export const updateProjectWithQueries = async(project: any, id: number) => {
  await project.update({
    where: {
      id: id
    },
    data: project,
  })
}


