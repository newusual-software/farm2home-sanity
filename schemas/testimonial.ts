export default ({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        required: true
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'profilePicture',
        title: 'Profile Picture',
        type: 'image',
        options: {
            hotspot: true // <-- Defaults to false
          },
      }
    ]
  })
  