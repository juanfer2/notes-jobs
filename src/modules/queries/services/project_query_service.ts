import { create } from "lodash";
import { Service } from "typedi";
import { project, queryScript, script } from "../../../clients/prisma_client";

export const updateProjectAndQueries = async(id: any, inputProject: any) => {

  console.log(inputProject)

  const scripts = inputProject.scripts.map((script: any): any => {
    return {
      where: {
        id: parseInt(script.id)
      },
      update: {
        title: script.title,
        type: script.type,
        content: script.content,
      }
    } 
  })

     

  console.log('scripts', scripts)

  try {
    const a = await queryScript.update({
      where: {
        id: parseInt(id)
      },
      data: {
        title: inputProject.title,
        description: inputProject.description,
        scripts: {
          connectOrCreate: scripts
        }
      },
      include: {
        scripts: true
      }
    })

    console.log('result', a)
  } catch (error) {
    console.log(error)
  }
}
