const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, options) => {
  return(
    {
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
            exclude: /node_modules/,
            use: { loader: 'babel-loader' }
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