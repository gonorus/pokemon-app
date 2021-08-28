const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

let mode = 'development';
if (process.env.NODE_ENV == 'production') {
  mode = 'production';
}

module.exports = (env, options) => {
  return (
    {
      mode: mode,
      devtool: mode === 'production' ? false : 'source-map',
      devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        hot: true,
      },
      entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
      },
      output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
      optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              test: /node_modules/,
              name: "vendor",
              chunks: "all",
            }
          }
        }
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: options.mode === 'development' ? 'Development' : 'Production',
          template: path.resolve(__dirname, 'src', 'template.html')
        }),
        // new WebpackBundleAnalyzer()
      ],
    }
  );
}