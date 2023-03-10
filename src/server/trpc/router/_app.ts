import { router } from "../trpc";
import { authRouter } from "./auth";
import { discordRouter } from "./discord";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  discord: discordRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
