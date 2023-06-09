import { Application, Router } from "https://deno.land/x/oak@v10.2.0/mod.ts";
import { exec } from 'https://deno.land/x/exec/mod.ts';

const app = new Application();

// First we try to serve static files from the _site folder. If that fails, we
// fall through to the router below.
app.use(async (ctx, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/_site`,
      index: "index.html",
    });
  } catch {
    next();
  }
});

const router = new Router();

// The /api/time endpoint returns the current time in ISO format.
router.get("/api/time", (ctx) => {
  ctx.response.body = { time: new Date().toISOString() };
});

router.get("/", (ctx) => {
  ctx.response.redirect("/page/home");
});

router.get("/go", async (ctx) => {
  await Deno.writeTextFile(
    "./page/hello10.md",
    "--- title: testand10 --- ### Hello World!",
  );
  console.log("File written to ./page/hello10.md");
  console.log(await exec('deno task build'));
});

// After creating the router, we can add it to the app.
app.use(router.routes());
app.use(router.allowedMethods());


await app.listen({ port: 8000 });

// import Server from "lume/core/server.ts";

// const server = new Server({
//   port: 8000,
//   root: `${Deno.cwd()}/_site`,
// });

// server.start();

// console.log("Listening on http://localhost:8000");

// import Server from "lume/core/server.ts";

// const server = new Server({
//   port: 8000,
//   root: `${Deno.cwd()}/_site`,
// });

// server.start();

// console.log("Listening on http://localhost:8000");
