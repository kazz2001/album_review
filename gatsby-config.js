module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },  
  siteMetadata: {
    title: 'Black Music Album Review',
    description: 'Album review for Soul and Hip-Hop Music',
    keywords: 'CD, Album, CD Review, Album Review, Black Music, Soul, Hip-Hop',
    siteUrl: 'https://planetky.com',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-54911-1",
        head: true,
      }
    },
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
            subDirectory: '/album_review',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
  ],
};
