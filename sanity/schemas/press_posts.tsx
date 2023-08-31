
export default {
    name: 'press',
    title: 'Press',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tab Title',
        type: 'string'
      },
      {
        title: 'Press Posts',
        name: 'press_posts',
        type: 'array',
        of:[
            {
                title: 'Press Item',
                name: 'press_item',
                type: 'object',
                fields: [{name: 'press_link',title: 'Press Link',type: 'url'},{name:'press_hed', title:'Press Headline',type:'string'}]
              }
        ]
      }

      
    ]
  }