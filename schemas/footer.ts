export default ({
    name: 'Sitemap',
    title: 'Sitemap',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [{ 
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'targetLink',
              title: 'Target Link',
              type: 'string'
            }
          ]
        }]
      }
    ]
  })
  