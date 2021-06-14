
import serverlessExpress from "@vendia/serverless-express";
import {app} from "./common/app"
exports.handler = serverlessExpress({ app: app.callback() })