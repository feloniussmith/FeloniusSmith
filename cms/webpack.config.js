const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const production = process.env.NODE_ENV === 'production';
const mode = production ? 'production' : 'development';
console.log(`Building CMS in ${mode} mode`);

module.exports = {
  entry: './cms.js',
  output: {
    filename: 'cms.bundle.js',
    path: path.resolve(__dirname, '../public/admin/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Include .ts and .tsx extensions
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  mode,
  stats: { warnings: false, children: false },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Include .ts and .tsx files
        exclude: /node_modules/,
        loader: 'ts-loader', // Use ts-loader for TypeScript files
        options: {
          transpileOnly: true, // Set transpileOnly to true to speed up the build process
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-private-property-in-object',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'cms.bundle.css',
    }),
  ],
};
