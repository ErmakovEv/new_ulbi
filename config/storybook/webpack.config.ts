import webpack from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

type Obj = {
  config: webpack.Configuration;
};

export default ({ config }: Obj) => {
  const paths: BuildPath = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
    output: '',
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.tsx', '.ts');
  config.module?.rules?.push(buildCssLoader(true));
  return config;
};
