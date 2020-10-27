import { getClient } from "./sanity";

const movieFields = `
  _id,
  externalId,
  title,
  'createdAt': _createdAt,
  'updatedAt': _updatedAt,
  releaseDate,
  'slug': slug.current,
`;
// 'posterImage': poster.asset->url,
// 'author': author->{name, 'picture': image.asset->url},

const getUniqueMovies = (posts: any) => {
  const slugs = new Set();
  return posts.filter((post: any) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

export async function getAllMoviesForHome(preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "movie"] | order(updatedAt desc, createdAt desc){
      ${movieFields}
    }`);
  return getUniqueMovies(results);
}
