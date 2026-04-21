import { useEffect, useState } from 'react'
import client from '../helpers/client'

export default function Chris() {
    const [sanityMedlem, setSanityMedlem] = useState(null)

    useEffect(() => {
      /* Henter alle gruppemedlemmer fra Sanity databasen */
      async function fetchChris() {
        const allMedlemmer = await client.fetch("*[_type == 'gruppemedlemmer' && navn == 'Chris Haraldsen']{_id, navn, epost, studie, omMeg, bilde, arbeidskravbilde2, arbeidskravbilde3, 'imageURL': bilde.asset->url}")
        setSanityMedlem(Chris)
      }

      fetchChris()
    }, [])

    return (
        <article className="profilkort-chris">
            {/* */}
            {sanityMedlem && (
                <>
            <figure>
                {minProfil && (
                    <img
                        src={minProfil.imageURL}
                        alt="Chris"
                    />
                )}
            </figure>
            <section>
                <h3>{sanityMedlem.Chris}</h3>
                <p><strong>Studie: </strong>{sanityMedlem.studie}</p>
                <address>
                    E-post: <a href={`mailto:${sanityMedlem.epost}`}>{sanityMedlem.epost}</a>
                </address>
                {/*Om meg feltet */}
                {sanityMedlem.omMeg && (
                    <p><strong>Om meg: </strong>{sanityMedlem.omMeg}</p>
                )}
            </section>
            {/*Henter ut bilde fra AK 2 */}
            {sanityMedlem.ak2URL && (
                <figure classname="arbeidskrav-bilde">
                    <figcaption>Arbeidskrav 2</figcaption>
                    <img src={sanityMedlem.ak1URL} alt="screenshot av ak2" />
                </figure>
            )}
            {/*Henter ut AK3 */}
            {sanityMedlem.ak3URL && (
                <figure className="arbeidskrav-bilde">
                    <figcaption>Arbeidskrav 3</figcaption>
                    <img src={sanityMedlem.ak3URL} alt="screenshot av ak3" />
                </figure>
            )}
            </>
            )}
        </article> 
    )
}