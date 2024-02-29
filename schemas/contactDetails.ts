export default {
    name: 'generalInquiries',
    title: 'General Inquiries',
    type: 'document',
    fields: [
      {
        name: 'phoneNumbers',
        title: 'Phone Numbers',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Array of phone numbers',
      },
      {
        name: 'emailAddresses',
        title: 'Email Addresses',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Array of email addresses',
      },
      {
        name: 'officeAddress',
        title: 'Office Address',
        type: 'text',
        description: 'Physical address of the office',
      },
    ],
  };
  