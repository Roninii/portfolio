// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Ronini.dev",
  titleTemplate: "%s",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blog/**/*.md",
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "BlogPost",
        feedOptions: {
          title: "Oh, for fox sake.",
          feed_url: "https://ronini.dev/rss.xml",
          site_url: "https://ronini.dev/blog",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          url: `https://ronini.dev${node.path}`,
          author: node.author,
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ["gridsome-plugin-remark-prismjs-all"],
    },
  },
  templates: {
    BlogPost: "/blog/:title",
  },
};
