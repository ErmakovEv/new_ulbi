import { ResolveOptions } from 'webpack';

export const buildResolve = (): ResolveOptions => ({
  //путь без расширения
  extensions: ['.tsx', '.ts', '.js'],
});
