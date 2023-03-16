import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
const site = lume();
site.copy("css")
site.copy("fonts")
site.copy("images")
site.copy("js")
site.copy("video")
site.script("add-date-published", (title: string) => {
    Deno.writeTextFileSync(
      site.dest(title + ".txt"),
      `Site published at: ${Date.now()}`,
    );
  });
site.script(
    "delpage",
    "rm scp site.gz user@host.com:/home/user/archive",
  );
site.use(jsx());
export default site;
