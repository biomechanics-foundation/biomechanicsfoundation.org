// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Biomechanics Foundation',
    tagline: 'Promoting biomechanics through software, education, and outreach',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://biomechanicsfoundation.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'biomechanics-foundation', // Usually your GitHub org/user name.
    projectName: 'biomechanicsfoundation.org', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                // docs: {
                //     sidebarPath: './sidebars.js',
                //     routeBasePath: '/',
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     // editUrl:
                //     //   'https://github.com/biomechanics-foundation/biomechanicsfoundation.org/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            // Replace with your project's social card
            image: 'img/biomechanics-foundation-social-card.png',
            navbar: {
                title: 'Biomechanics Foundation',
                logo: {
                    alt: 'Biomechanics Foundation Logo',
                    src: 'img/biomechanics-foundation-logo.png',
                },
                items: [
                    {
                        href: '/mission',
                        position: 'left',
                        label: 'Mission',
                    },
                    //{ to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/biomechanics-foundation',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    //{
                    //    title: 'Docs',
                    //    items: [
                    //        {
                    //            label: 'Tutorial',
                    //            to: '/docs/intro',
                    //        },
                    //    ],
                    //},
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/biomechanics-foundation',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/biomechanics-foundation',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Biomechanics Foundation`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap',
    ],
};

export default config;
