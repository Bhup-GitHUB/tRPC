import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputs = z.object({
  title: z.string(),
  description: z.string().optional(),
});

const appRouter = router({
  createTodo: publicProcedure.input(todoInputs).mutation(async (opts) => {
    const title = opts.input.title;
    const description = opts.input.description;

    //db stuff here

    return {
      id: "1",
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
