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

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

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
				blogSidebarCount: 0,
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2023',
				routeBasePath: 'articles/issue8',
				path: './issue8',
				blogSidebarCount: 0,
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2022',
				routeBasePath: 'articles/issue7',
				path: './issue7',
				blogSidebarCount: 0,
				showReadingTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'articles2021',
				routeBasePath: 'articles/issue6',
				path: './issue6',
				blogSidebarCount: 0,
				showReadingTime: true,
			},
		],
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

					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.

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
		image: 'img/docusaurus-social-card.jpg',
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
