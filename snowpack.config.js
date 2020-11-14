/**
 * Snowpack configuration for [profile.place]
 * @type {import('snowpack').SnowpackConfig}
 */
module.exports = {
  exclude: ['node_modules', '**/*.d.ts'],
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass'
  ],
  devOptions: {
    port: 3621
  },
  buildOptions: {
    clean: true
  }
};
