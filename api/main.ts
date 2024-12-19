import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import data from "../api/data.json" with { type: "json" };
import { Dinosaur } from "../src/models/Dinosaur.model.ts";

const oakRouter = new Router();

oakRouter
  .get("/", context => {
    context.response.body = "Welcome to dinosaur API!";
  })
  .get("/dinosaurs", context => {
    context.response.body = data;
  })
  .get("/dinosaurs/:id", context => {
    if (!context?.params?.id) {
      // todo: change the response to error
      context.response.body = JSON.stringify({data: null, error: "No dinosaur name provided."});
    }
    const dino: Dinosaur | undefined = data.find((item: Dinosaur) => item.id === Number(context.params.id) );

    context.response.body = JSON.stringify(dino ? {data: dino, error: ''} : {data: null, error: "No dinosaur was found."});
  });

const app = new Application();
app.use(oakCors());
app.use(oakRouter.routes());
app.use(oakRouter.allowedMethods());

await app.listen({ port: 8080 });