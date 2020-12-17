const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const withCss = require("@zeit/next-css");

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

module.exports = withCss({
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/home": { page: "/home" },
    };
  },
});
