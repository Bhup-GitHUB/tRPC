import { httpBatchLink, createTRPCClient } from "@trpc/client";

import type { AppRouter } from "../server";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/",
    }),
  ],
});

async function main() {
  let response = await trpc.createTodo.mutate({
    title: "My first todo",
    description: "This is my first todo",
  });

  console.log("Todo created with ID:", response.id);
}

main();
