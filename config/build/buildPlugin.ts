import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import webpack from 'webpack';

export const buildPlugins = (
  htmlPath: string,
  isDev: boolean
): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({ template: htmlPath }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    _IS_DEV_: JSON.stringify(isDev),
  }),
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
];
