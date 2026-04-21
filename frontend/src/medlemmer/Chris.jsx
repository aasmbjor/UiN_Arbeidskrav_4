import { useEffect, useState } from 'react'
import client from '../helpers/client'

export default function Chris() {
    const [sanityMedlem, setSanityMedlem] = useState(null)

    useEffect(() => {
      /* Henter alle gruppemedlemmer fra Sanity databasen */
      async function fetchChris() {
        const allMedlemmer = await client.fetch("*[_type == 'gruppemedlemmer' && navn == 'Chris Haraldsen']{_id, navn, epost, studie, omMeg, bilde, arbeidskravbilde1, arbeidskravbilde2, 'imageURL': bilde.asset->url}")
        setSanityMedlem(Chris)
      }

      fetchChris()
    }, [])

    return (
        <article className="profilkort-chris">
            <figure>
                {minProfil && (
                    <img
                        src={minProfil.imageURL}
                        alt="Chris"
                    />
                )}
            </figure>
            <section>
                <h3>Chris Haraldsen</h3>
                <p><strong>Studie: </strong>Bachelor i Informasjonssystemer</p>
                <address>
                    E-post: <a href="mailto:chrisanh@hiof.no">chrisanh@hiof.no</a>
                </address>
            </section>
        </article> 
    )
}