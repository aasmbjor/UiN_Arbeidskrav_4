import { useEffect, useState } from "react"
import client from "../helpers/client"
import '../style/omoss.css'

export default function OmOss(){
  const [sanityAbout, setSanityAbout] = useState(null)

  useEffect(() => {
    async function fetchAbout() {
        const data = await client.fetch("*[_type == 'about'][0]{_id, about, bilde, 'imageURL': bilde.asset->url}")
        setSanityAbout(data)
    }
    fetchAbout()
  }, [])

  console.log(sanityAbout)
  return(
      <article className="about-container">
          <h1>Om Oss</h1>
          {sanityAbout?.imageURL && (<img src={sanityAbout.imageURL} alt="" className="gruppebilde"/>)}
          <p>{sanityAbout?.about}</p>
      </article>
  )
}


