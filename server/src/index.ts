import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["ALGOPERRON"] }));
app.use(AppRouter.getInstance());

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
