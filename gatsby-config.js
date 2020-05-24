module.exports = {
  siteMetadata: {
    title: 'Black Music CD Review',
    description: 'CD review for Soul and Hip-Hop Music',
    keywords: 'CD,CD Review,Black Music,Soul,Hip-Hop',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
        icon: "src/images/music.png", 
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/music.png', 
        repository: {
          baseUrl:
            'https://github.com/kazz2001',
            subDirectory: '/my-carbon-site',
        },
      },
    },
  ],
};
