export default {
    name: 'AboutUsPage',
    title: 'About Us Page',
    type: 'document',
    fields: [
      {
        name: 'welcomeSection',
        title: 'Welcome Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'content',
            title: 'Content',
            type: 'text'
          }
        ]
      },
      {
        name: 'storySection',
        title: 'Our Farm2Home Story Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'content',
            title: 'Content',
            type: 'text'
          }
        ]
      }
    ]
  }
  