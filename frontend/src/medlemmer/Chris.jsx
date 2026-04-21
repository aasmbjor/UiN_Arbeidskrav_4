import { useEffect, useState } from 'react'
import client from '../helpers/client'

export default function Chris() {
    const [sanityMedlem, setSanityMedlem] = useState(null)

    useEffect(() => {
        async function fetchChris() {
            const data = await client.fetch(`*[_type == 'gruppemedlemmer' && navn == 'Chris Haraldsen'][0]{
                navn, 
                epost, 
                studie, 
                omMeg, 
                'imageURL': bilde.asset->url, 
                'ak1URL': arbeidskravbilde1.asset->url,
                'ak2URL': arbeidskravbilde2.asset->url
            }`)
            setSanityMedlem(data)
        }
        fetchChris()
    }, [])

    return (
        <article className="profilkort-chris">
            {sanityMedlem && (
                <> 
                    <figure>
                        <img src={sanityMedlem.imageURL} alt={sanityMedlem.navn} />
                    </figure>
                    <section>
                        <h3>{sanityMedlem.navn}</h3>
                        <p><strong>Studie: </strong>{sanityMedlem.studie}</p>
                        <address>
                            E-post: <a href={`mailto:${sanityMedlem.epost}`}>{sanityMedlem.epost}</a>
                        </address>
                        {sanityMedlem.omMeg && <p><strong>Om meg: </strong>{sanityMedlem.omMeg}</p>}
                    </section>

                    {sanityMedlem.ak1URL && (
                        <figure className="arbeidskrav-bilde">
                            <figcaption>Arbeidskrav 1</figcaption>
                            <img src={sanityMedlem.ak1URL} alt="AK1" />
                        </figure>
                    )}

                    {sanityMedlem.ak2URL && (
                        <figure className="arbeidskrav-bilde">
                            <figcaption>Arbeidskrav 2</figcaption>
                            <img src={sanityMedlem.ak2URL} alt="AK2" />
                        </figure>
                    )}
                </> 
            )}
        </article>
    )
}