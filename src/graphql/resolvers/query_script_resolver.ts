import { IResolvers } from '@graphql-tools/utils'
import { authenticated } from '../../middlewares/auth-guard'
import QueryModel, { QueryInput } from '../../modules/queries/models/query_model'
import { Query } from '../generated'
import { updateProjectAndQueries } from '../../modules/queries/services/project_query_service'

export const QueryScriptResolver: IResolvers = {
  Query: {
    queryScripts: authenticated(async (_: void, arg: void, context: any): Promise<Query[]> => {
      return []
    })
  },
  Mutation: {
    updateQueryScript: authenticated(async (_: void, arg: any, context: any): Promise<any> => {
      const queryInput = arg;

      console.log(arg)
      await updateProjectAndQueries(arg.ID, arg.QueryScriptUpdateInput)
      return {
        description: 'text',
        id: "1",
        title: "text"
      }
    }),

    createQueryScript: authenticated(async (_: void, arg: any, context: any): Promise<any> => {
      const queryInput: QueryInput = arg.QueryScript;
      console.log('data', queryInput)

      const newQuery = new QueryModel(queryInput);
      const data: any = await newQuery.create();
      console.log("data", data);

      return data
    })
  }
}
