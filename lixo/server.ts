const { cwd, stdout, copy } = Deno;
import { renderFile } from "https://deno.land/x/dejs/mod.ts";
import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

const port = 8080;

const handler = (request: Request): Response => {
  
     
    (async () => {
      const output = await renderFile(`${cwd()}/template/index.ejs`, {
        name: "world",
      });
    
    //   const output = "maga"
  
      const body = output
    
      return new Response(body, { status: 200 });

    })();
  
 
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });