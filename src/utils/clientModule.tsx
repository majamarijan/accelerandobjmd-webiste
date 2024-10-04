import type { ClientModule } from '@docusaurus/types';

export function onRouteDidUpdate({ location, previousLocation }) {
	// Don't execute if we are still on the same page; the lifecycle may be fired
	// because the hash changes (e.g. when navigating between headings)
	if (location.pathname !== previousLocation?.pathname) {
		console.log(location.pathname)
		// if (title) {
		// 	title.innerText += '❤️';
		// }
	}
}

export function onRouteUpdate({ location, previousLocation }) {
	if (location.pathname !== previousLocation?.pathname) {
		const progressBarTimeout = window.setTimeout(() => {
      console.log('start')
		}, 1000);
		return () => window.clearTimeout(progressBarTimeout);
	}
	return undefined;
}
