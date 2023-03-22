import type { PageData } from "lume/core.ts";
// import tpl from './main.njk';

// const result = tpl.render({ message: 'hello es6' });
export const layout = "nav2.njk";
export default function ({ search }: PageData) {
  const pages = search.pages("type=page");

  return `
    <h2>Pages</h2>
    <ul>
      ${
        pages.map((page) =>
      `<li><a href="${page.data.url}">${page.data.title}</a></li>`
    ).join("")
  }
    </ul>
  `;
}
