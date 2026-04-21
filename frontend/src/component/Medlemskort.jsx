export default function Medlemskort({m}){
    return(
        <article className="member-card">
            <img className="imgsrc" src={m.imageURL} alt={m.navn} />
            <h3>{m.navn}</h3>
            {/* <a href="mailto:">{m.epost}</a> */}
        </article>
    )
}