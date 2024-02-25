export default {
    name: 'whyChooseFarm2Home',
    title: 'Why Choose Farm2Home',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'statistics',
        title: 'Statistics',
        type: 'array',
        of: [{ type: 'statistic' }]
      }
    ]
  }
  