const gruppemedlemmer = {
    name: "gruppemedlemmer",
    title: "Gruppemedlemmer",
    type: "document",
    fields: [
        {
            name: "navn",
            title: "Navn",
            type: "string"
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'navn',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 100)
            }
        },
        {
            name: "epost",
            title: "E-Post",
            type: "string"
        },
        {
            name: "studie",
            title: "Studium",
            type: "string"
        },
        {
            name: "bilde",
            title: "Bilde",
            type: "image"
        }
    ]
}

export default gruppemedlemmer