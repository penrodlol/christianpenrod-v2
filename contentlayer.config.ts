import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkPrism from 'remark-prism';
import slugify from 'slugify';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    published: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    github: { type: 'string' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'number',
      resolve: (post) => Math.round(readingTime(post.body.code).minutes),
    },
    headings: {
      type: 'list',
      of: { type: 'json' },
      resolve: (post) =>
        post.body.raw.match(/##.+/g)?.map((h2) => {
          h2 = h2.replace(/##/, '').trim();
          return { text: h2, hash: slugify(h2, { lower: true }) };
        }),
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeExternalLinks, rehypeSlug],
    remarkPlugins: [remarkPrism],
  },
});
