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
        },
        {
            name: "omMeg",
            title: "Om meg",
            type: "text"
        },
        {
            name: "arbeidskravbilde1",
            title: "Arbeidskrav 1 Bilde",
            type: "image"
        },
        {
            name: "arbeidskravbilde2",
            title: "Arbeidskrav 2 Bilde",
            type: "image"
        }
    ]
}

export default gruppemedlemmer