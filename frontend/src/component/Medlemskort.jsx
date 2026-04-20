export default function Medlemskort({m}){
    return(
        <article>
            <img src={m.imageURL} alt={m.navn} />
            <h3>{m.navn}</h3>
            <a href="mailto:">{m.epost}</a>
        </article>
    )
}