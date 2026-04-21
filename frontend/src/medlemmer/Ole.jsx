import { useEffect, useState } from "react"
import client from "../helpers/client"

export default function Ole(){

    const [oleProfil, setOleProfil] = useState(null)

    useEffect(() => {
        async function fetchOle() {
            const data = await client.fetch(
                "*[_type == 'gruppemedlemmer' && navn == 'Ole Bovolden'][0]{_id, navn, epost, studie, bilde, 'imageURL': bilde.asset->url, omMeg}"
            )
            setOleProfil(data)
        }
 
        fetchOle()
    }, [])

    console.log(oleProfil)
    
    return(
        <main>
            <section>
                <h2>{oleProfil?.navn} sin side</h2>
                <img src={oleProfil?.imageURL} alt={"Bilde av " + oleProfil?.navn} />
                <p>E-post: <a href={"mailto:" + oleProfil?.epost}>{oleProfil?.epost}</a></p>
                <p>{"Jeg går "+ oleProfil?.studie}</p>
                <p>Litt om meg: {oleProfil?.omMeg}</p>
            </section>
        </main>
    )
}