import Server from "lume/core/server.ts";



//upload
import { readerFromStreamReader } from "https://deno.land/std@0.117.0/streams/mod.ts";
// import { readableStreamFromReader } from "https://deno.land/std@0.117.0/streams/mod.ts";

import { serve } from "https://deno.land/std/http/mod.ts";
const SAVE_PATH = "./";
async function reqHandler(req: Request) {
  const url = new URL(req.url);
  // const fileName = url.searchParams.get("filename") || crypto.randomUUID();
  console.log(req);
  
  const fileName = 'tt2.md'//url.searchParams.get("filename");
  console.log(fileName);
  
  if (!req.body) {
    return new Response(null, { status: 400 });
  }
  const reader = req?.body?.getReader();
  const f = await Deno.open(SAVE_PATH + fileName, {
    create: true,
    write: true,
  });
  await Deno.copy(readerFromStreamReader(reader), f);
  await f.close();
  return new Response();
}
serve(reqHandler, { port: 5000 });




const server = new Server({
  port: 3000,
//   root: `${Deno.cwd()}`,
//   root: `${Deno.cwd()}/_site`,
  root: `${Deno.cwd()}/_site`,

  
});

server.start();

console.log("Listening on http://localhost:3000");

