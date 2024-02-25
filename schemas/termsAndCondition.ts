export default {
  name: 'TermsAndConditionsPage',
  title: 'Terms and Conditions Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
