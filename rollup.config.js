import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const prod = process.env.PRODUCTION;
const esbundle = process.env.ESBUNDLE;

let output;
if (prod) {
  console.log('Creating production UMD bundle...'); // eslint-disable-line no-console
  output = { file: 'dist/styled-reboot.min.js', format: 'umd' };
} else if (esbundle) {
  console.log('Creating ES modules bundle...'); // eslint-disable-line no-console
  output = { file: 'dist/styled-reboot.es.js', format: 'es' };
} else {
  console.log('Creating development UMD bundle'); // eslint-disable-line no-console
  output = { file: 'dist/styled-reboot.js', format: 'umd' };
}

const plugins = [
  nodeResolve(),
  commonjs({
    ignoreGlobal: true
  }),
  babel({
    babelrc: false,
    presets: [['env', { modules: false, loose: true }]],
    plugins: [
      'external-helpers',
      'transform-object-rest-spread',
      'transform-class-properties'
    ]
  })
];

if (prod) {
  plugins.push(uglify());
}

export default {
  input: 'src/index.js',
  name: 'styled-reboot',
  external: ['react', 'styled'].concat(
    esbundle ? Object.keys(pkg.dependencies) : []
  ),
  exports: 'named',
  output,
  plugins,
  globals: { 'styled-components': 'styled', react: 'React' }
};
