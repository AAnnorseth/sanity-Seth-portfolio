export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6255dbb63065d510f7563e72',
                  title: 'Sanity Studio',
                  name: 'sanity-seth-portfolio-studio',
                  apiId: '49ab2c77-cc0a-4291-bb04-0e3947f99d1c'
                },
                {
                  buildHookId: '6255dbb6ca365514b35d7289',
                  title: 'Portfolio Website',
                  name: 'sanity-seth-portfolio',
                  apiId: 'abf68c72-82c2-4ae5-ad64-88cc50e3f3a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AAnnorseth/sanity-Seth-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-seth-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
