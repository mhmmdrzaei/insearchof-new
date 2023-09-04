export default {
    name: 'seo',
    title: 'Page SEO',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string'
      },
      {
        name:'description',
        title: 'description',
        description: '150-160 characters NOT MORE',
        type:'text'
      },
      {
        title: 'SEO  Image',
        name: 'seo_image',
        type: 'image',
        description: '1200 x 626 pixels'
      },
      {
        title: 'Twitter SEO Image',
        name: 'seo_image_twitter',
        type: 'image',
        description: '835 x 626 pixels'
      }

      
    ]
  }