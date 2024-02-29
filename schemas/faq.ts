export default {
    name: 'FaqList',
    title: 'FAQ List',
    type: 'document',
    fields: [
      {
        name: 'faqs',
        title: 'FAQs',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'string'
              },
              {
                name: 'answer',
                title: 'Answer',
                type: 'text'
              }
            ]
          }
        ]
      }
    ]
  }
  