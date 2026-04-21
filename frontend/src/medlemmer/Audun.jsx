import { useEffect, useState } from "react"
import client from "../helpers/client"
import "./style/Audunstyle.css"

export default function Audun(){
    const [profil, setProfil] = useState(null)

    useEffect(()=>{
        async function fetchHenden(){
            const queryData = "*[_type == 'gruppemedlemmer' && navn == 'Audun Henden'][0]{navn, epost, studie, omMeg, 'AK2URL': arbeidskravbilde1.asset->url, 'AK3URL': arbeidskravbilde2.asset->url, 'imageURL': bilde.asset->url}"
            const data = await client.fetch(queryData)
            setProfil(data)
        }
        fetchHenden()
    }, [])


    return(
        <section className="ahv-component">
            <article className="ahv-profil">
                <section className="ahv-img">
                    <img src={profil?.imageURL} alt={profil?.navn} />
                </section>
                <section className="ahv-info">
                    <h2>{profil?.navn}</h2>
                    <p><b>E-post:</b> <a href="mailto:ahhenden@hiof.no">{profil?.epost}</a></p>
                    <p><b>Studie:</b> {profil?.studie}</p>
                </section>
            </article>
            <article className="ahv-about">
                <p>{profil?.omMeg}</p>
            </article>
            <article className="ahv-arbeidskrav">
                <h3>Arbeidskrav 1</h3>
                <p>Gjennom denne oppgaven har jeg fått en dypere forståelse for hvordan moderne webutvikling henger sammen, med fokus på tre kjerneområder:</p>
                <ul>
                    <li>
                        <b>npm og package.json:</b> Jeg har lært at npm er verktøyet som styrer alle eksterne biblioteker (pakker), 
                        mens package.json fungerer som prosjektets "oppskrift" og kontrollfil. 
                        Den holder styr på versjoner, avhengigheter og viktige skript.
                    </li>
                    <li>
                        <b>Shai-Hulud-angrepet:</b> Jeg har sett hvordan et såkalt supply chain-angrep fungerer i praksis. 
                        Virus som Shai-Hulud utnytter tilliten til npm-økosystemet ved å injisere ondsinnet kode i populære pakker, 
                        som deretter sprer seg automatisk til utviklere og GitHub-repositorier.
                    </li>
                    <li>
                        <b>Kritisk sans som utvikler:</b> Det viktigste læringspunktet er at man aldri må stole blindt på pakker eller forslag fra AI-verktøy. 
                        Som utvikler har jeg et ansvar for å verifisere kilder og være bevisst på sårbarheter i koden jeg installerer.
                    </li>
                </ul>
            </article>
            <article className="ahv-arbeidskrav">
                <h3>Arbeidskrav 2</h3>
                <img src={profil?.AK2URL} alt="Arbeidskrav 2" />
                <p>Gjennom utviklingen av denne applikasjonen har jeg demonstrert forståelse for de mest sentrale konseptene i moderne frontend-utvikling:</p>
                <ul>
                    <li>
                        <b>State-håndtering:</b> Jeg har lært å bruke useState for å kontrollere dynamiske data, 
                        som listen over varer og verdiene i input-feltene. 
                        Dette inkluderer å håndtere endringer i sanntid når brukeren skriver eller endrer antall.
                    </li>
                    <li>
                        <b>Komponentstruktur og Props:</b> Oppgaven har vist hvordan man bryter ned et grensesnitt i mindre, 
                        gjenbrukbare komponenter og sender data mellom dem ved bruk av props.
                    </li>
                    <li>
                        <b>Input-validering og Feilhåndtering:</b> Jeg har implementert logikk for å sikre datakvalitet, 
                        slik som å hindre tomme felter ved registrering og sørge for at antall alltid er en positiv verdi (ikke 0 eller negativ).
                    </li>
                    <li>
                        <b>Interaktivitet:</b> Applikasjonen viser hvordan man håndterer brukerinteraksjoner gjennom hendelser (events), 
                        som å legge til nye elementer øverst i en liste, 
                        krysse av for fullførte oppgaver og oppdatere eksisterende verdier direkte i visningen.
                    </li>
                </ul>
            </article>
            <article className="ahv-arbeidskrav">
                <h3>Arbeidskrav 3</h3>
                <img src={profil?.AK3URL} alt="Arbeidskrav 3" />
                <p>Dette arbeidskravet markerer overgangen fra enkle verktøy til en fullverdig webapplikasjon som kommuniserer med omverdenen. 
                    Jeg har lært og anvendt følgende:</p>
                <ul>
                    <li>
                        <b>API-håndtering og Asynkronitet:</b> Jeg har lært å koble applikasjonen til et eksternt grensesnitt (OMDB API). 
                        Dette innebærer å håndtere fetch-kall, API-nøkler, og å styre logikken for når søk skal utføres (f.eks. minimum tre tegn).
                    </li>
                    <li>
                        <b>Dynamisk Routing:</b> Ved bruk av React Router har jeg implementert navigasjon mellom en forside og spesifikke filmsider. 
                        Jeg har lært å bruke dynamiske parametere (/:movie) for å lage unike URL-er basert på filmtitler (slugs).
                    </li>
                    <li>
                        <b>Semantisk Web og Struktur:</b> Et sentralt krav i denne oppgaven var totalt fravær av div. 
                        Dette har tvunget frem en dypere forståelse for semantisk HTML (som main, section, article, header), 
                        noe som er kritisk for universell utforming og søkemotoroptimalisering (SEO).
                    </li>
                    <li>
                        <b>Betinget Rendering:</b> Jeg har praktisert hvordan applikasjonen skal endre innhold basert på dataflyt – 
                        fra å vise en standardliste med James Bond-filmer til å presentere dynamiske søkeresultater eller detaljert filminformasjon.
                    </li>
                </ul>
            </article>
            <article className="ahv-arbeidskrav">
                <h3>Arbeidskrav 4</h3>
                <p></p>
            </article>
        </section>
    )
}