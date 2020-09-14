// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Homepage',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ],
  siteUrl: 'https://<your-github-username>.github.io',
  pathPrefix: '/<your-gridsome-repo-name>',
};
