// _archetypes/page.ts

export default function (title: string, content: string) {
    const slug = title.replace(/\s+/g, "-").toLowerCase();
  
    return {
      path: `/pages/${slug}.md`,
      content: {
        title: title,
        layout: "layout.njk",
        img: "/images/header/rod-long-I79Pgmhmy5M-unsplash.jpg",
        header: {
            txt1: title,
            txt2: "Confere aí!"
        },
        content: content,
      },
    };
  }