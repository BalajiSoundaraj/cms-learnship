export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fedbd01af2ae366c6ac07da',
                  title: 'Sanity Studio',
                  name: 'cms-learnship-studio',
                  apiId: '037b0f93-109e-4730-9946-4a6367bf6c11'
                },
                {
                  buildHookId: '5fedbd011c14ed6ccb92dc47',
                  title: 'Blog Website',
                  name: 'cms-learnship',
                  apiId: 'f5577a36-b85d-466e-828c-47e506d08597'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BalajiSoundaraj/cms-learnship',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cms-learnship.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
