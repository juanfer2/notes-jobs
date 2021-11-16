import { IResolvers } from '@graphql-tools/utils'
import { authenticated } from '../../middlewares/auth-guard'
import { Project, ProjectInput } from '../generated'
import ProjectModel from '../../modules/projects/models/project'
import GetProjects from '../../modules/projects/services/get_projects'

export const ProjectResolver: IResolvers = {
  Query: {
    projects: authenticated(async (_: void, arg: void, context: any): Promise<Project[]> => {
      const getProjects = new GetProjects
      const projects: any = await getProjects.byUser(context.currentUser)
      return projects ? projects : []
    })
  },
  Mutation: {
    createProject: authenticated(async (_: void, arg: any, context: any): Promise<Project> => {
      const userInput: ProjectInput = arg.ProjectInput;
      const newProject = new ProjectModel({...userInput,
        user: context.currentUser});
      const data: any = await newProject.create();
      console.log("data", data);

      return data
    })
  }
}
