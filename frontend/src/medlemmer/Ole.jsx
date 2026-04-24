import './style/oleStyle.css'
import { useEffect, useState } from "react"
import client from "../helpers/client"

export default function Ole(){

    const [oleProfil, setOleProfil] = useState(null)

    useEffect(() => {
        async function fetchOle() {
            const data = await client.fetch(
                "*[_type == 'gruppemedlemmer' && navn == 'Ole Bovolden'][0]{_id, navn, epost, studie, bilde, 'imageURL': bilde.asset->url, omMeg, arbeidskravbilde1, 'AK1imageURL': arbeidskravbilde1.asset->url, 'AK2imageURL': arbeidskravbilde2.asset->url, arbeidskravbilde2}"
            )
            setOleProfil(data)
        }
 
        fetchOle()
    }, [])

    console.log(oleProfil)
    
    return(
        <main className="ole-container">
            <section className="profil-flex">
                <section className='bilde-kolonne'>
                    {oleProfil?.imageURL && (
                        <img className="ole-bilde" src={oleProfil?.imageURL} alt={"Bilde av " + oleProfil?.navn} />
                    )}
                </section>
                
                <section className="ole-info">
                    <h2 id="ole-tittel"><strong>Navn: </strong>{oleProfil?.navn}</h2>
                    <p><strong>E-post: </strong><a href={"mailto:" + oleProfil?.epost}>{oleProfil?.epost}</a></p>
                    <p><strong>Studium: </strong>{oleProfil?.studie}</p>
                    <p><strong>Litt om meg:</strong></p>
                    <p>{oleProfil?.omMeg}</p>
                </section>
            </section>
            <section className="tileggsinfo">
                <h3>Mer informasjon</h3>
                <p>Utklipp av arbeidskrav 2 og 3:</p>
                
                <section className="bilde-grid">
                    <figure>
                        <img src={oleProfil?.AK1imageURL} alt="" />
                        <figcaption>Arbeidskrav 2</figcaption>
                    </figure>
                    <figure>
                        <img src={oleProfil?.AK2imageURL} alt="" />
                        <figcaption>Arbeidskrav 3</figcaption>
                    </figure>
                </section>
            </section>
        </main>
    )
}