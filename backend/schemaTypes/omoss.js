const omOss = {
    name: "about",
    title: "Om Oss",
    type: "document",
    fields: [
        {
            name: "about",
            title: "Om Oss",
            type: "text"
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'about',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 100)
            }
        },
        {
            name: "bilde",
            title: "Bilde",
            type: "image"
        },
    ]
}

export default omOss