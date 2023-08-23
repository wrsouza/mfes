const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { dependencies } = require("./package.json");

const HOST_URL = process.env.HOST_URL;
const HOME_URL = process.env.HOME_URL;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    host: `host@${HOST_URL}/_next/static/${location}/remoteEntry.js`,
    home: `home@${HOME_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "sellers",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          sellers: "./src/pages",
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
