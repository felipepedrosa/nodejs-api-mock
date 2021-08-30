import express from "express";
import { existsSync, readFileSync } from "fs";
import { createRoutes } from "./createMethods.js";

const app = express().use(express.json());

const fileExists = existsSync("routes.json");
if (!fileExists) throw Error("File 'routes.json' not found!");

const file = readFileSync("routes.json");
if (!file || file.length === 0) throw Error("routes file can't be empty!");

const routes = JSON.parse(file);
app.use(createRoutes(routes));

app.get("/routes", (request, response) => {
  response.status(200).json(
    routes.map((endpoint) => {
      const httpMethods = endpoint.methods.map((method) => {
        return method.type;
      });

      return { httpUri: endpoint.url, httpMethods };
    })
  );
});

export default app;
