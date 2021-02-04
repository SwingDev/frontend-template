/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    '~': './src',
  },
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'npm run lint',
        name: 'lint',
        watch: 'npm run lint:watch',
      },
    ],
    ['@snowpack/plugin-sass', {}],
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
