/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  format: "md",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
    },
    {
      type: "string",
      label: "Category",
      name: "category",
      options: ["dev", "homelab", "life"],
    },
    {
      type: "rich-text",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
};
