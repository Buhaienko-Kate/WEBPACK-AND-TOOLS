module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     // style-loader
      //     { loader: 'style-loader' },
      //     // css-loader
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //       },
      //     },
      //     // sass-loader
      //     { loader: 'sass-loader' },
      //   ],
      // },
      {
        test: /.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
};
