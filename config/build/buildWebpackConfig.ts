import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugin';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => ({
  mode: options.mode,
  entry: options.path.entry,
  output: {
    filename: '[name].[contenthash].js',
    path: options.path.output,
    clean: true,
  },
  plugins: buildPlugins(options.path.html),
  module: {
    rules: buildLoaders(options.isDev),
  },
  resolve: buildResolve(),
  devtool: options.isDev ? 'inline-source-map' : undefined,
  devServer: options.isDev ? buildDevServer(options) : undefined,
});
