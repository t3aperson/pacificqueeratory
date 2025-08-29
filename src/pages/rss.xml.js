import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Auzzie.space - Blog",
    description: "A blog about programming, technology, and more.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id.replace(/\.[^.]*$/, "")}/`,
    })),
  });
}
