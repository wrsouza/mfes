const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { dependencies } = require("./package.json");

const HOST_URL = process.env.HOST_URL;
const HOME_URL = process.env.HOME_URL;
const SELLERS_URL = process.env.SELLERS_URL;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    host: `host@${HOST_URL}/_next/static/${location}/remoteEntry.js`,
    home: `home@${HOME_URL}/_next/static/${location}/remoteEntry.js`,
    sellers: `sellers@${SELLERS_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "blog",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          blog: "./src/pages",
        },
        remotes: remotes(options.isServer),
        shared: {
          "i18next-shared-lib/": { // BEWARE THE TRAILING "/" !!
            singleton: true,
          },
          i18next: {
            singleton: true,
            requiredVersion: dependencies.i18next
          },
          "react-i18next": {
            singleton: true,
            requiredVersion: dependencies["react-i18next"]
          },
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};
