import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import client from "../helpers/client"
import '../style/omArbeidskrav.css'

export default function Akinfo(){
    const parameters = useParams()
    const [oblig, setOblig] = useState(null)

    useEffect(()=>{
        /* Henter alle arbeidskrav fra Sanity databasen */
        const query = "*[_type == 'arbeidskrav' && slug.current == $slug][0]"
        async function fetchAllArbeidskrav(slug) {
            const allArbeidskrav = await client.fetch(query, {slug})
            setOblig(allArbeidskrav)
      }

      fetchAllArbeidskrav(parameters.slug)
    }, [parameters.slug])
    
    // console.log(parameters)
    // console.log(oblig)

    /* Link til Gemini samtale for smålig hjelp til koden: https://gemini.google.com/share/254f4bdcd768 */

    return(
        <section className="arbeidskrav-info">
            <h2>{oblig?.ak_navn}</h2>
            <p>{oblig?.ak_info}</p>
        </section>
    )
}