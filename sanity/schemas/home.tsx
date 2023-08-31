

export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tab Title',
        readOnly: true,
        type: 'string'
      },
      {
        title: 'Image Layout',
        name: 'home_images',
        type: 'array',
        of:[
            {
              title: 'Home Image',
              name: 'home_image',
              type: 'image',
              options: {
                hotspot: true // <-- Defaults to false
              },
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                },
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
            }
        ]
      }

      
    ]
  }