import cors from "@fastify/cors";
import fasify from "fastify";
import { appRoutes } from "./routes";

const app = fasify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3333,
    //host: "192.168.100.41",
    host: "0.0.0.0"
  })
  .then(() => {
    console.log("HTTP Server running");
  });
