import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser(), // minify, but only in production
		copy({
			targets: [
				{ src: 'src\\index.html', dest: 'public' },
				{ src: '**\\*.component*.html', dest: 'public\\assets\\' },
				{ src: 'src\\assets\\*', dest: 'public\\assets\\' }
			]
		}),
		replace({
			'process.env.NODE_ENV': production,
			preventAssignment: false
		})
	]
};
