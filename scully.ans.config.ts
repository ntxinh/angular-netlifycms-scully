import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'ans',
  // pluginDir: './scully/plugins/',
  outDir: './dist/static',
  routes: {
    '/news/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './mdnews'
      }
    },
  }
};
