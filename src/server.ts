import fasify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = fasify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/hello", () => {
  const habits = prisma.habit.findMany();

  return habits;
});

app.listen({
  port: 3333
}).then(() => {
  console.log("HTTP Server running");
});