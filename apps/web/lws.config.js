// lws.config.js

module.exports = {
  rewrite: [
    {
      from: '/api/(.*)',
      to: '/api/[tokenId].html',
    },
  ],
  directory: 'out',
}
