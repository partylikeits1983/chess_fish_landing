import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma;

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
