
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default [
  {
    input: 'index',
    output: {
      name: 'index.bundle',
      dest: 'dist/index.js',
      format: 'umd',
      plugins: [
        eslint({
          exclude: ['src/styles/**'],
        }),
        babel({
          exclude: 'node_modules/**',
        }),
      ],
    }
  }
]