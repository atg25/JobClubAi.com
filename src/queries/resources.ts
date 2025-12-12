// GROQ queries for resources (blog posts)

export const RESOURCES_QUERY = `*[_type == "resource"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  author,
  publishedAt
}`;

export const RESOURCE_BY_SLUG_QUERY = `*[_type == "resource" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  author,
  publishedAt,
  body,
  _createdAt,
  _updatedAt
}`;

export const ALL_RESOURCE_SLUGS_QUERY = `*[_type == "resource"] {
  "slug": slug.current
}`;
