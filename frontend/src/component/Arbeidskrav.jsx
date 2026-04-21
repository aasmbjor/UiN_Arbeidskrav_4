import { useEffect, useState } from "react"
import client from '../helpers/client'
import { Link } from 'react-router-dom'
import Oblig from "./Oblig"

export default function Arbeidskrav(){
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
    console.log(oblig)
    return(
        <section className="arbeidskrav-liste">
            <h2 className="undertitle">Arbeidskrav</h2> {/* Lagt til overskrift for listing av gruppemedlemmer */}
            {oblig?.map((a, index) => (
                <Link key={index} to={"/arbeidskrav/" + a.slug.current}>
                    <article className="oblig-card">
                    <h3>{a.ak_navn}</h3>
                    </article>
                </Link>))}
        </section>
    )
}