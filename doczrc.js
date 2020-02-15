const projectRoot = require.main.filename.split('/node_modules/')[0];

const { menuItems } = require(`${projectRoot}/config/menu.json`);

export default {
  files: 'docs/**/*.{md,markdown,mdx}',
  title: 'Gatsby Starter with Docz & Netlify CMS',
  menu: menuItems
}