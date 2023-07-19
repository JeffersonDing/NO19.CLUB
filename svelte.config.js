import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
	preprocess: preprocess({ scss: true }),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			fallback: 'index.html',
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		})
	}
};
