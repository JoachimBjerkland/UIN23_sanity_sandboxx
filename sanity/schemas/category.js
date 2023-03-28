export default {
    name: 'categories',
    type: 'document',
    title: 'Kategorier',
    fields: [
        {
            name: 'category_title',
            type: 'string',
            title: 'Kategorinavn'
        },
        {
            name: 'category_slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'category_title',
                slugify: input => input.toLowerCase()
                                    .replace(/[^\w-]+/g, '-')
                                    .slice(0,150)
            }
        },
        {
            name: 'category_image',
            type: 'image',
            title: 'Bilde'
        }
    ]
}