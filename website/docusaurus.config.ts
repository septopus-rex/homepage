import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  //title: 'Keep Fairness Forever Great',
  title: 'Septopus, your world, your rules, your creation.',
  tagline: 'Septopus Rex',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://septopus.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ff13dfly', // Usually your GitHub org/user name.
  projectName: 'septopus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    //locales: ['en','zh-Hans','fr'],
    locales: ['en'],
  },
  // plugins: [
  //   '@docusaurus/plugin-content-docs',
  // ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      logo: {
        alt: 'Septopus Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'declaration',
          label: 'Declaration',
          position: 'left',
        },
        {
          to: 'project',
          label: 'Projects',
          position: 'left',
          activeBasePath:'detail',
        },
        { 
          to: '/docs/septopus', 
          label: 'Documents', 
          position: 'left',
          activeBasePath:'/docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/septopus-rex/homepage',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            {
              label: 'Discord',
              href: 'https://discord.gg/dAnC5CtJ',
            },
            {
              label: 'X',
              href: 'https://x.com/SeptopusRex',
            },
            // {
            //   label: 'Reddit',
            //   href: 'https://x.com/septopus',
            // },
            {
              label: 'Github',
              href: 'https://github.com/septopus-rex',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:admin@septopus.xyz',
            },
          ],
        },
        {
          title: 'Launch Peroid',
          items: [
            {
              label: 'Founder',
              href: 'https://x.com/metanchor',
            },
            {
              label: 'Rule Center',
              href: 'https://github.com/septopus-rex/rule',
            },
            {
              label: 'Septopus World',
              href: 'https://github.com/septopus-rex/world',
            },
            {
              label: 'King Center',
              href: 'https://github.com/septopus-rex/king',
            },
            {
              label: 'AI Center',
              href: 'https://github.com/septopus-rex/ai',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/ff13dfly/septopus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Septopus Rex. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
