export default function Medlemskort({m}){
    return(
        <article className={`member-card profil-${m.slug.current}`}>
            <img className="imgsrc" src={m.imageURL} alt={m.navn} />
            <h3>{m.navn}</h3>
        </article>
    )
}