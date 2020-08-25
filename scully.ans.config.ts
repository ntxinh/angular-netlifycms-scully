import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "ans",
  pluginDir: './scully/plugins/',
outDir: './dist/static',
  routes: {
    '/news/:title': {
      type: 'contentFolder',
      title: {
        folder: "./mdnews"
      }
    },
  }
};
