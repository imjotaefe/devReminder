const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withPlugins([withNextEnv, withImages], {
  distDir: "build",
});
