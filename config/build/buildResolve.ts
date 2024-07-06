import { ResolveOptions } from 'webpack';
import { BuildPath } from './types/config';

export const buildResolve = (paths: BuildPath): ResolveOptions => ({
  //путь без расширения
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {},
});
