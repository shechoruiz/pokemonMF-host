/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "pokehost",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          pokeremote1:
            "pokeremote1@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          pokeremote2:
            "pokeremote2@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          pokeremote3:
            "pokeremote3@http://localhost:3003/_next/static/chunks/remoteEntry.js",
        },
        exposes: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;
