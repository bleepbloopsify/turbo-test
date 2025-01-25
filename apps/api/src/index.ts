import { expressConnectMiddleware } from "@connectrpc/connect-express";
import cors from "cors";
import express from "express";
import http from "http";
import morgan from "morgan";
import routes from "./connect";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(
  expressConnectMiddleware({
    routes,
  })
);

http.createServer(app).listen(8080);
