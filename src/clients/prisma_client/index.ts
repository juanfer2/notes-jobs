import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  errorFormat: 'pretty',
});

export const { user, project, queryScript, script } = prisma;
export default prisma;
