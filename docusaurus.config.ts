import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// import tailwindPlugin from './plugins/tailwind-config.cjs';
import 'dotenv/config';

const config: Config = {
	title: 'Accelerando: BJMD',
	tagline: 'Belgrade Journal of Music and Dance',
	favicon: 'img/favicon-16x16.png',
	staticDirectories: ['static'],

	// Set the production url of your site here
	url: 'https://your-docusaurus-site.example.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	plugins: [
		async function myPlugin(context, options) {
			return {
				name: 'tailwind-plugin',
				configurePostCss(postcssOptions) {
					postcssOptions.plugins = [
						require('postcss-import'),
						require('tailwindcss'),
						require('autoprefixer'),
					];
					return postcssOptions;
				},
			};
		},
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2024',
				routeBasePath: 'articles/issue9',
				path: './issue9',
				blogSidebarCount: 'ALL',
				blogSidebarTitle: 'Articles Issue 9',
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2023',
				routeBasePath: 'articles/issue8',
				path: './issue8',
				blogSidebarCount: 'ALL',
				showReadingTime: true,
				blogSidebarTitle: 'Articles Issue 8',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2022',
				routeBasePath: 'articles/issue7',
				path: './issue7',
				blogSidebarCount: 'ALL',
				showReadingTime: true,
				blogSidebarTitle: 'Articles Issue 7',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2021',
				routeBasePath: 'articles/issue6',
				path: './issue6',
				blogSidebarCount: 'ALL',
				blogSidebarTitle: 'Articles Issue 6',
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2020',
				routeBasePath: 'articles/issue5',
				path: './issue5',
				blogSidebarCount: 'ALL',
				blogSidebarTitle: 'Articles Issue 5',
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2019',
				routeBasePath: 'articles/issue4',
				path: './issue4',
				blogSidebarCount: 'ALL',
				blogSidebarTitle: 'Articles Issue 4',
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2018',
				routeBasePath: 'articles/issue3',
				path: './issue3',
				blogSidebarCount: 'ALL',
				blogSidebarTitle: 'Articles Issue 3',
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2017',
				routeBasePath: 'articles/issue2',
				path: './issue2',
				blogSidebarCount: 'ALL',
				blogSidebarTitle: 'Articles Issue 2',
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2016',
				routeBasePath: 'articles/issue1',
				path: './issue1',
				blogSidebarCount: 'ALL',
				blogSidebarTitle: 'Articles Issue 1',
				showReadingTime: true,
			},
		],
		require.resolve('docusaurus-plugin-image-zoom'),
	],
	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
				},
				blog: {
					showReadingTime: false,
					routeBasePath: '/archive',
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					blogSidebarCount: 'ALL',
					blogSidebarTitle: 'Archive',
					archiveBasePath: 'issues',
					blogTitle: 'Archive',
					blogDescription:
						'Accelerando: Journal of Music and Dance, Issues Archive',

					editLocalizedFiles: false,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.

					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				pages: {
					showLastUpdateTime: true,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/LOGO_320.png',
		zoom: {
			selector: '.markdown .figureBox figure img',
			background: {
				dark: 'rgb(50, 50, 50)',
				light: 'rgb(255, 255, 255)',
			},
		},
		navbar: {
			title: 'Home',
			style: 'dark',
			logo: {
				alt: 'Accelerando: BJMD logo',
				src: 'img/logo192.png',
			},

			items: [
				{ to: '/about', label: 'About', position: 'left', title: 'About' },
				{
					to: '/editorial',
					label: 'Editorial',
					position: 'left',
					title: 'Editorial Board',
				},
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Guidelines',
				},
				{ to: '/archive', label: 'Archive', position: 'left' },
				{ to: '/submission', label: 'Submission', position: 'left' },
			],
		},
		footer: {
			style: 'dark',
			links: [],

			copyright: `This website is under ​Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) Belgrade Center for Music and Dance is the publisher of Accelerando: BJMD`,
			logo: {
				src: 'img/by-nc-nd.png',
				alt: 'Licence CC by NC-ND 4.0',
			},
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
