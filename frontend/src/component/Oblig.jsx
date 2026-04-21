import { useEffect, useState } from "react"
import client from '../helpers/client'
import { Link } from 'react-router-dom'

export default function Oblig(){
    const [oblig, setOblig] = useState(null)

    useEffect(()=>{
        /* Henter alle arbeidskrav fra Sanity databasen */
        const query = "*[_type == 'arbeidskrav']{ak_navn, ak_info, slug}"
        async function fetchAllArbeidskrav() {
        const allArbeidskrav = await client.fetch(query)
        setOblig(allArbeidskrav)
      }

      fetchAllArbeidskrav()
    }, [])

    return(
        <section className="arbeidskrav-liste oblig">
             {oblig?.map((a, index) => (
                <Link key={a.slug.current} to={"/arbeidskrav/" + a.slug.current}>
                    <article className="oblig-card">
                        <h2>{a.ak_navn}</h2>
                    </article>
                </Link>))}
        </section>
    )
}