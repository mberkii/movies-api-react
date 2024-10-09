/** @type { import('@storybook/react').Preview } */

import "../src/index.css";

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			values: [
				{ name: 'Dark', value: '#333' },
				{ name: 'Light', value: '#F7F9F2' },
				{ name: 'Greyish', value: '#282c34' },
			],
			default: 'Greyish',
		},
	},
};

export default preview;
