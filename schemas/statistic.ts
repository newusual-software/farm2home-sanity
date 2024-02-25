// Define the statistic schema
export const statistic = ({
    name: 'statistic',
    title: 'Statistic',
    type: 'object',
    fields: [
      {
        name: 'value',
        title: 'Value',
        type: 'string'
      },
      {
        name: 'label',
        title: 'Label',
        type: 'string'
      }
    ]
  })
  