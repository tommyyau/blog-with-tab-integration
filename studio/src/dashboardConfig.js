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
                  buildHookId: '5eb1ebb24e50342cee7d3e40',
                  title: 'Sanity Studio',
                  name: 'blog-with-tab-integration-studio',
                  apiId: 'fd802cf9-17f3-49bc-ad67-d12289156a51'
                },
                {
                  buildHookId: '5eb1ebb22bb55b2ea0ea2325',
                  title: 'Blog Website',
                  name: 'blog-with-tab-integration',
                  apiId: '3e871115-9a12-46b5-83dc-398121a07289'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommyyau/blog-with-tab-integration',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-with-tab-integration.netlify.app', category: 'apps' }
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
