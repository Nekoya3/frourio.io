module.exports = {
  title: 'frourio',
  tagline: 'Fast and comfortable full stack framework, for TypeScript',
  url: 'https://frourio.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.png',
  organizationName: 'frouriojs', // Usually your GitHub org/user name.
  projectName: 'frourio.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      title: 'frourio',
      logo: {
        alt: 'frourio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/frouriojs/frourio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Installation',
              to: 'docs/Installation/gui',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/SARkeDf',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/solufa2020',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/frouriojs/frourio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Solufa.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/frouriojs/frourio.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/frouriojs/frourio.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
