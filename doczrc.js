export default {
  files: 'docs/**/*.{md,markdown,mdx}',
  title: 'My Awesome Documentation',
  public: '/static',
  menu: [
    'Welcome',
    {
      name: 'Getting Started',
      menu: [
        'Installation'
      ]
    }
  ]
}