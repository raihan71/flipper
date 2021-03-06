/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

function FBInternalWithOssFallback(elements, fallback) {
  return process.env.FB_INTERNAL ? elements : fallback;
}

const repoUrl = 'https://github.com/facebook/flipper';

const siteConfig = {
  title: FBInternalWithOssFallback('Flipper @FB', 'Flipper'),
  tagline: 'Extensible mobile app debugging',
  url: FBInternalWithOssFallback('https://flipper.thefacebook.com/', 'https://fbflipper.com/'),
  baseUrl: '/',
  projectName: 'flipper',
  // TODO: T69061026 enable once sandy docs are complete: external_domain: 'fbflipper.com',
  themeConfig: {
    navbar: {
      title: FBInternalWithOssFallback('Flipper @FB', 'Flipper'),
      logo: {
        alt: 'Flipper Logo',
        src: 'img/icon.png',
      },
      links: [
        {to: 'docs/features/index', label: 'Features', position: 'right'},
        {to: 'docs/getting-started/index', label: 'Setup', position: 'right'},
        {to: 'docs/extending/index', label: 'Extending', position: 'right'},
        {href: repoUrl, label: 'GitHub', position: 'right'},
      ],
    },
    disableDarkMode: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Getting Started', to: 'docs/getting-started/index'},
            {label: 'Plugin Creation Tutorial', to: 'docs/tutorial/intro'},
          ],
        },
        {
          title: 'Plugins',
          items: [
            {label: 'Core Plugins', to: 'docs/features/index'},
            {
              label: 'Community Plugins',
              href: 'https://www.npmjs.com/search?q=keywords:flipper-plugin',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Twitter', href: 'https://twitter.com/flipper_fb'},
            {label: 'GitHub', href: repoUrl},
          ],
        }
      ],
      copyright: 'Copyright © ' + new Date().getFullYear() + ' Facebook',
      logo: {
        alt: 'Flipper Mascot',
        src: 'img/mascot.png',
        title: "I'm a dolphin not a whale!",
      },
    },
    algolia: FBInternalWithOssFallback(undefined, {
      apiKey: '2df980e7ffc95c19552790f7cad32666',
      indexName: 'fbflipper',
      algoliaOptions: {
        hitsPerPage: 5,
      },
    }),
    prism: {
      additionalLanguages: ['groovy', 'java', 'kotlin', 'ruby', 'swift'],
    },
  },
  favicon: 'img/icon.png',
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js',
    '/js/google-analytics.js',
  ],
  stylesheets: [],
  // start_config_example
  plugins: [require.resolve('docusaurus-plugin-internaldocs-fb')],
  // end_config_example
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/flipper/blob/master/website',
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = siteConfig;
