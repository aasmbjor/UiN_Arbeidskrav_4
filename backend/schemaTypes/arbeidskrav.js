const arbeidskrav = {
    name: "arbeidskrav",
    title: "UiN Arbeidskrav",
    type: "document",
    fields: [
        {
            name: "ak_navn",
            title: "ak_tittel",
            type: "string"
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'ak_navn',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 100)
            }
        },
        {
            name: "ak_info",
            title: "ak_informasjon",
            type: "text"
        }
    ]
}

export default arbeidskrav