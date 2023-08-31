

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            title: 'Logo',
            name: 'logo',
            type: 'image',
            options: {
              hotspot: false // <-- Defaults to false
            },
            fields: [
              {
                name: 'alt_text',
                type: 'string',
                title: 'alt text',
              }
              
            ]
        },
      {
        name: 'title',
        title: 'Site Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Site Intro Text',
        type: 'array', 
         of: [{type: 'block'}]
      },
      {
        name: 'mission',
        title: 'Mission Text',
        type: 'array', 
        of: [{type: 'block'}]      
      },
      {
        title: 'Social Links',
        name: 'social',
        type: 'array',
        of:[
            {
                title: 'Social Links',
                name: 'social',
                type: 'object',
                fields: [{name: 'social_link',title: 'Social Link',type: 'url'},{name:'social_name', title:'Social Name',type:'string'}]
              }
        ]
      }
      
    ]
  }