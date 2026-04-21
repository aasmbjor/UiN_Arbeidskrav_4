import { useEffect, useState } from 'react'
import client from '../helpers/client'
import Medlemskort from './Medlemskort'
import { Link } from 'react-router-dom'
export default function Gruppemedlemmer(){
    const [sanityMedlem, setSanityMedlem] = useState(null)

    useEffect(() => {
      /* Henter alle gruppemedlemmer fra Sanity databasen */
      async function fetchAllMedlemmer() {
        const allMedlemmer = await client.fetch("*[_type == 'gruppemedlemmer']{_id, navn, epost, studie, bilde, 'imageURL': bilde.asset->url}")
        setSanityMedlem(allMedlemmer)
      }

      fetchAllMedlemmer()
    }, [])

    console.log(sanityMedlem)

    return (
    <section id="member-list">
      <h2 className="undertitle">Gruppemedlemmer</h2> {/* Lagt til overskrift for listing av gruppemedlemmer */}
      {sanityMedlem?.map((m) => (<Link key={m._id} to={"/"}> <Medlemskort key={m._id} m={m}/></Link>))}
    </section>)



    
}