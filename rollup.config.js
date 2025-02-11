import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import string from "./_build_tools/string";

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
				{ src: 'src/index.html', dest: 'public' },
				{ src: ['src/assets/*', 'src/assets/*'], dest: 'public/assets/' }
			],
			verbose: true
		}),
		replace({
			'process.env.NODE_ENV': production,
			preventAssignment: false
		}),
		string({
			include: "**/*.html",
			exclude: ["**/index.html"]
		})
	]
};
