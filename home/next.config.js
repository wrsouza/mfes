const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { dependencies } = require("./package.json");

const HOST_URL = process.env.HOST_URL;
const SELLERS_URL = process.env.SELLERS_URL;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    host: `host@${HOST_URL}/_next/static/${location}/remoteEntry.js`,
    sellers: `sellers@${SELLERS_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          home: "./src/pages",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};