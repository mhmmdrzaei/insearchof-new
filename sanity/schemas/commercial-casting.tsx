export default {
    name: 'commercial-casting',
    title: 'Commercial Casting',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
        }
      },
     {
        name: 'castingdescription',
        title: 'Casting Description',
        type: 'array', 
        of: [{type: 'block'}]

     },

      {
        title: 'Casting Images',
        name: 'com_casting_img',
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
                  name: 'alt',
                  type: 'string',
                  title: 'alt',
                },
                {
                  name: 'width',
                  type: 'string',
                  title: 'Image Width',
                  options: {
                    list: [
                      {value: '50%', title: 'Half'},
                      {value: '100%', title: 'Full'},
                    ],
                  },
                }
              ]
            },
            
        ]
      },
      {
        title: 'Casting Video',
        name: 'casting_video',
        type: 'file',
      },
      {
        title: 'Casting Embed Video',
        name: 'casting_embed_video',
        type: 'text'
      }

      
    ]
  }