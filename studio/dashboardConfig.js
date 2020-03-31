export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e83d6e9640908b46283c6c2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y8sx9hhf',
                  apiId: '4e956cf4-ede8-42f6-b2f5-f7b2cdd0bf4e'
                },
                {
                  buildHookId: '5e83d6e98f3f1facc6edee6b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7ae11ang',
                  apiId: '45608330-87fe-43aa-becb-699bbc2b4199'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fesp21/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7ae11ang.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
