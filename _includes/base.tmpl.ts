import type { PageData } from "lume/core.ts";

export const title = "Welcome to my page2";
export const layout = "layout.njk";

export default function ({ title, content, type, menumain, search }: PageData) {
  let pages = [...search.pages("type=page"), ...search.pages("menumain=true")]
  let subpages = null
  console.log(3, title);
  console.log(4, type);
 
  if (type !== 'page') {
    subpages = search.pages("type=" + type);
    console.log(6, subpages);
  }
  
//   console.log(Headers);
  
  const ret = {
    menu:  pages.map((page) => [page.data.url, page.data.title]),
    submenu: subpages&&subpages.map((page) => [page.data.url, page.data.title]),
    body: content,
    type: type
  }
  
  return ret
}
