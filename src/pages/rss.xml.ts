import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context: { site: string | URL }) {
  const posts = await getCollection("blog");
  return rss({
    title: "Auzzie.space - Blog",
    description: "A blog about programming, technology, and more.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.id.replace(/\.[^.]*$/, "")}/`,
    })),
  });
}
