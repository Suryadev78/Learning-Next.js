import { PrismaClient } from "@prisma/client";

// Extend the global object in TypeScript
declare global {
  // Extending the type definition of globalThis to include `prisma`
  // It's either a `PrismaClient` instance or `undefined`
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

// Check if `globalThis.prisma` exists, otherwise create a new instance
if (typeof globalThis.prisma === "undefined") {
  prisma = new PrismaClient();
  if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prisma; // In non-production environments, attach it to `globalThis`
  }
} else {
  prisma = globalThis.prisma; // Use the existing Prisma client
}

export default prisma;
