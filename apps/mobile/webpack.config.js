// eslint-disable-next-line @typescript-eslint/no-var-requires
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.css$/,
          use: [
            {
              loader: 'postcss-loader',
            },
          ],
        },
      ],
    },
  };
};
