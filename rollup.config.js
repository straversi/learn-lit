import resolve from '@rollup/plugin-node-resolve';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';

export default {
  input: 'main.js',
  output: {
    file: 'build/index.js'
  },
  plugins: [
    resolve(),
    // Needed for the playground-ide.js
    // https://github.com/google/playground-elements/blob/main/examples/rollup/rollup.config.js
    importMetaAssets(),
  ]
};