const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#007bfe" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
