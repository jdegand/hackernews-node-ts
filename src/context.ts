/*
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type GraphQLContext = {
  prisma: PrismaClient;
};

export async function contextFactory(): Promise<GraphQLContext> {
  return {
    prisma,
  };
}
*/
/*
import { PrismaClient, User } from "@prisma/client";
import { FastifyRequest } from "fastify";
import { authenticateUser } from "./auth";

const prisma = new PrismaClient();

export type GraphQLContext = {
  prisma: PrismaClient;
  currentUser: User | null;
};

export async function contextFactory(request: FastifyRequest): Promise<GraphQLContext> {
  return {
    prisma,
    currentUser: await authenticateUser(prisma, request),
  };
}
*/

import { PrismaClient, User } from "@prisma/client";
import { FastifyRequest } from "fastify";
import { authenticateUser } from "./auth";
import { pubSub } from "./pubsub";

const prisma = new PrismaClient();

export type GraphQLContext = {
  prisma: PrismaClient;
  currentUser: User | null;
  pubSub: typeof pubSub;
};

export async function contextFactory(
  request: FastifyRequest
): Promise<GraphQLContext> {
  return {
    prisma,
    currentUser: await authenticateUser(prisma, request),
    pubSub,
  };
}