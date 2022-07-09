import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkPrism from 'remark-prism';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    published: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    github: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) =>
        `/blog/${post._raw.flattenedPath.replace('posts/', '')}`,
    },
    readingTime: {
      type: 'number',
      resolve: (post) => Math.round(readingTime(post.body.code).minutes),
    },
    headings: {
      type: 'list',
      of: { type: 'string' },
      resolve: (post) =>
        post.body.raw.match(/##.+/g)?.map((h2) => h2.replace(/##/, '').trim()),
    },
  },
}));

export const Role = defineDocumentType(() => ({
  name: 'Role',
  filePathPattern: 'roles/*.mdx',
  contentType: 'mdx',
  fields: {
    company: { type: 'string', required: true },
    logo: { type: 'string', required: true },
    start: { type: 'date', required: true },
    end: { type: 'date' },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Role],
  mdx: {
    rehypePlugins: [rehypeExternalLinks, rehypeSlug],
    remarkPlugins: [() => remarkPrism({ transformInlineCode: true })],
  },
});
