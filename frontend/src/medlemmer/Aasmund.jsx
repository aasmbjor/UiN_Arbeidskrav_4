import { useEffect, useState } from "react"
import client from "../helpers/client"
import './style/aasmund.css'

export default function Medlem() {
  const [sanityMedlem, setSanityMedlem] = useState(null)

  useEffect(() => {
    async function fetchMedlem() {
        const data = await client.fetch(`
          *[_type == 'gruppemedlemmer' && navn == 'Åsmund Bjørnerud'][0]{
            _id, 
            navn, 
            epost, 
            studie, 
            omMeg, 
            'imageURL': bilde.asset->url,
            'arbeidskrav1URL': arbeidskravbilde1.asset->url,
            'arbeidskrav2URL': arbeidskravbilde2.asset->url
          }
        `)
        setSanityMedlem(data)
    }

    fetchMedlem()
  }, [])

  return (
    <article className="medlem-container">
      <section>
        <h1>{sanityMedlem?.navn}</h1>
        {sanityMedlem?.imageURL && (<img src={sanityMedlem.imageURL} alt={`${sanityMedlem?.navn}`} className="profilbilde"/>)}
        <p>{sanityMedlem?.studie}</p>
        <a href={`mailto:${sanityMedlem?.epost}`}>{sanityMedlem?.epost}</a>
      </section>

      <section className="omMeg">
        <h2>Om meg</h2>
        <p>{sanityMedlem?.omMeg}</p>
      </section>

        <h2>Arbeidskrav 2</h2>
          {sanityMedlem?.arbeidskrav1URL && (<img src={sanityMedlem.arbeidskrav1URL} alt={`${sanityMedlem?.navn}`}/>)}
      <section className="arbeidskrav3">
        <h2>Arbeidskrav 3</h2>
          {sanityMedlem?.arbeidskrav2URL && (<img src={sanityMedlem.arbeidskrav2URL} alt={`${sanityMedlem?.navn}`}/>)}
      </section>
    </article>
  )
}