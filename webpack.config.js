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
        historyApiFallback: true,
      },
      entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
      },
      output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
            index: {
              name: 'index',
              test: /[\\/]src[\\/]/,
            },
            react_vendor: {
              name: 'react_vendor',
              test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            },
            graphql_vendor: {
              name: 'graphql_vendor',
              test: /[\\/]node_modules[\\/]graphql[\\/]/,
            },
            components_vendor: {
              name: 'components_vendor',
              test: /[\\/]node_modules[\\/](react-svg-radar-chart|react-lazy-load-image-component|react-infinite-scroll-component)[\\/]/,
            },
            vendors: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
            }
          }
        },
        runtimeChunk: true
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
            test: /\.(png|gif|jpe?g|svg|ico)$/,
            type: 'asset/resource'
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: mode === 'development' ? 'Development' : 'Production',
          template: path.resolve(__dirname, 'src', 'template.html'),
          favicon: path.resolve(__dirname, 'src', 'images', 'favicon.ico')
        }),
        // new WebpackBundleAnalyzer()
      ],
    }
  );
}