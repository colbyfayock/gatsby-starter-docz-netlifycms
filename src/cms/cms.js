import { init } from 'netlify-cms-app'

init({
  config: {
    backend: {
      name: 'git-gateway'
    },
    load_config_file: false,
    media_folder: 'static/images/uploads',
    public_folder: '/images/uploads',
    collections: [
      {
        label: 'Doc',
        name: 'doc',
        folder: 'docs',
        create: true,
        slug: '{{menu}}{{name}}',
        identifier_field: 'route',
        extension: 'mdx',
        format: 'frontmatter',
        fields: [
          {
            label: 'Name',
            name: 'name'
          },
          {
            label: 'Menu',
            name: 'menu',
            required: false
          },
          {
            label: 'Route',
            name: 'route'
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown'
          },
        ]
      },
      {
        label: 'Settings',
        name: 'settings',
        files: [
          {
            label: 'Menu',
            name: 'menu',
            file: 'config/menu.json',
            fields: [
              {
                label: 'Menu Item',
                name: 'Menu item',
                widget: 'list',
                fields: [
                  {
                    label: 'Name',
                    name: 'name'
                  },
                  {
                    label: 'Menu',
                    name: 'menu',
                    widget: 'list'
                  }
                ],
                default: [
                  'Welcome'
                ]
              }
            ]
          }
        ]
      }
    ],
  },
});