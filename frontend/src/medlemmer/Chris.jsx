import { useEffect, useState } from 'react'
import client from '../helpers/client'

export default function Chris() {
    const [minProfil, setMinProfil] = useState(null)

    useEffect(() => {
        async function fetchChris() {
            //Henter fra sanity og groq spørringen min.
            const data = await client.fetch(
                `*[_type == "gruppemedlemmer" && navn == "Chris Haraldsen"][0]{
                    "imageURL": bilde.asset->url
                }`
            )
            setMinProfil(data)
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