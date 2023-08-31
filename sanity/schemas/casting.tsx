export default {
    name: 'casting',
    title: 'Casting',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tab Title',
        type: 'string'
      },
      {
        title: 'Casting Layout',
        name: 'press_posts',
        type: 'array',
        of:[
            {
              title: 'Casting Image',
              name: 'casting_image',
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
                },
                {
                  name: 'width',
                  type: 'number',
                  title: 'Image Width',
                  options: {
                    list: [
                      {value: 25, title: '25%'},
                      {value: 50, title: '50%'},
                      {value: 75, title: '75%'}
                    ],
                  },
                }
              ]
            },
            {
              title: 'Casting Video',
              name: 'casting_video',
              type: 'file',
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption'
                },
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution'
                }
              ]
            }
        ]
      }

      
    ]
  }