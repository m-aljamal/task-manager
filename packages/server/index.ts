import cookieParser from "cookie-parser";
import { publicProcedure, router, createContext } from "./trpc";
import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";

import cors from "cors";
const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!!!!!! @@@@@wow"),
});
export type AppRouter = typeof appRouter;

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

app.use(
  "/",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
app.listen(4000);
