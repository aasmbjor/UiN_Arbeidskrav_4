import { useEffect, useState } from "react"
import client from "../helpers/client"
import "./style/Audunstyle.css"

export default function Audun(){
    const [profil, setProfil] = useState(null)

    useEffect(()=>{
        async function fetchProfile(){
            const queryData = "*[_type == 'gruppemedlemmer' && navn == 'Audun Henden'][0]{navn, epost, studie, omMeg, 'AK2URL': arbeidskravbilde1.asset->url, 'AK3URL': arbeidskravbilde2.asset->url, 'imageURL': bilde.asset->url}"
            const data = await client.fetch(queryData)
            setProfil(data)
        }
        fetchProfile()
    }, [])

    const akDummyData = [
        {
            id: 0,
            tittel: "Arbeidskrav 1",
            beskrivelse: "Gjennom denne oppgaven har jeg fått en dypere forståelse for hvordan moderne webutvikling henger sammen, med fokus på tre kjerneområder:",
            punkter: [
                {
                    label: "npm og package.json:", 
                    text: `Jeg har lært at npm er verktøyet som styrer alle eksterne biblioteker (pakker), mens package.json fungerer som prosjektets 'oppskrift' og kontrollfil. 
                    Den holder styr på versjoner, avhengigheter og viktige skript.` },
                {
                    label: "Shai-Hulud-angrepet:",
                    text: `Jeg har sett hvordan et såkalt supply chain-angrep fungerer i praksis. 
                        Virus som Shai-Hulud utnytter tilliten til npm-økosystemet ved å injisere ondsinnet kode i populære pakker, 
                        som deretter sprer seg automatisk til utviklere og GitHub-repositorier.`
                },
                {
                    label: "Kritisk sans som utvikler:",
                    text: `Det viktigste læringspunktet er at man aldri må stole blindt på pakker eller forslag fra AI-verktøy. 
                        Som utvikler har jeg et ansvar for å verifisere kilder og være bevisst på sårbarheter i koden jeg installerer.`
                }
            ]
        },
        {
            id: 1,
            tittel: "Arbeidskrav 2",
            beskrivelse: "Gjennom utviklingen av denne applikasjonen har jeg demonstrert forståelse for de mest sentrale konseptene i moderne frontend-utvikling:",
            punkter: [
                {
                    label: "State-håndtering:",
                    text: `Jeg har lært å bruke useState for å kontrollere dynamiske data, 
                        som listen over varer og verdiene i input-feltene. 
                        Dette inkluderer å håndtere endringer i sanntid når brukeren skriver eller endrer antall.`
                },
                {
                    label: "Komponentstruktur og Props:",
                    text: `Oppgaven har vist hvordan man bryter ned et grensesnitt i mindre, 
                        gjenbrukbare komponenter og sender data mellom dem ved bruk av props.`
                },
                {
                    label: "Input-validering og Feilhåndtering:",
                    text: `Jeg har implementert logikk for å sikre datakvalitet, 
                        slik som å hindre tomme felter ved registrering og sørge for at antall alltid er en positiv verdi (ikke 0 eller negativ).`
                },
                {
                    label: "Interaktivitet:",
                    text: `Applikasjonen viser hvordan man håndterer brukerinteraksjoner gjennom hendelser (events), 
                        som å legge til nye elementer øverst i en liste, 
                        krysse av for fullførte oppgaver og oppdatere eksisterende verdier direkte i visningen.`
                }
            ],
            bildeTxt: "Fremside av fullført arbeidskrav 2",
            bildeURL: profil?.AK2URL
        },
        {
            id: 2,
            tittel: "Arbeidskrav 3",
            beskrivelse: "Dette arbeidskravet markerer overgangen fra enkle verktøy til en fullverdig webapplikasjon som kommuniserer med omverdenen.",
            punkter: [
                {
                    label: "API-håndtering og Asynkronitet:",
                    text: `Jeg har lært å koble applikasjonen til et eksternt grensesnitt (OMDB API).`
                },
                {
                    label: "Dynamisk Routing:",
                    text: `Ved bruk av React Router har jeg implementert navigasjon mellom en forside og spesifikke filmsider.`
                },
                {
                    label: "Semantisk Web og Struktur:",
                    text: `Et sentralt krav i denne oppgaven var totalt fravær av div.`
                },
                {
                    label: "Betinget Rendering:",
                    text: `Jeg har praktisert hvordan applikasjonen skal endre innhold basert på dataflyt – 
                        fra å vise en standardliste med James Bond-filmer til å presentere dynamiske søkeresultater eller detaljert filminformasjon.`
                }
            ],
            bildeTxt: "Fremside av fullført arbeidskrav 3",
            bildeURL: profil?.AK3URL
        },
        {
            id: 3,
            tittel: "Arbeidskrav 4",
            beskrivelse: "Dette arbeidskravet simulerer en reell arbeidshverdag for en utvikler, der fokus flyttes fra individuelle oppgaver til felles leveranse. Jeg har lært og praktisert følgende:",
            punkter: [
                {
                    label: "Smidig arbeidsflyt med Git:",
                    text: `Jeg har fått erfaring med profesjonell bruk av GitHub, 
                        inkludert bruk av branches for isolert utvikling og merging til en felles "publish"-branch. 
                        Dette er kritisk for å unngå kodekonflikter når flere jobber på samme prosjekt.`
                },
                {
                    label: "Headless CMS (Sanity):",
                    text: `Oppgaven har introdusert meg for konseptet med å skille innhold fra kode. 
                        Ved å koble applikasjonen til Sanity, har jeg lært å hente og presentere dynamiske data (arbeidskravene) som kan redigeres eksternt uten å endre selve kildekoden.`
                },
                {
                    label: "Komponentbasert arkitektur i team:",
                    text: `Jeg har praktisert hvordan man utvikler uavhengige komponenter som sømløst skal fungere sammen i en felles layout, 
                        samtidig som jeg har ivaretatt kravet om semantisk HTML (uten bruk av 'div').`
                },
                {
                    label: "Profesjonell identitet og dokumentasjon:",
                    text: `Gjennom å bygge min egen profilkomponent og dokumentere tidligere arbeidskrav, 
                        har jeg lært å presentere teknisk kompetanse og prosjekthistorikk på en oversiktlig og strukturert måte.`
                }
            ],
            bildeTxt: "Fremside av fullført arbeidskrav 4"
        }
    ]


    return(
        <section className="ahv-container">
            <article className="ahv-profil">
                <section className="ahv-img">
                    <img src={profil?.imageURL} alt={profil?.navn} />
                </section>
                <section className="ahv-info">
                    <h2>{profil?.navn}</h2>
                    <p><b>E-post:</b> <a href={`mailto:${profil?.epost}`}>{profil?.epost}</a></p>
                    <p><b>Studie:</b> {profil?.studie}</p>
                </section>
            </article>
            <article className="ahv-about">
                <p>{profil?.omMeg}</p>
            </article>
            {akDummyData.map((ak)=>(
                <details className="ahv-arbeidskrav" key={ak.id}>
                    <summary><h3>{ak.tittel}</h3></summary>
                    <p>{ak.beskrivelse}</p>
                    <ul>
                        {ak.punkter.map((p, index)=>(
                            <li key={index}>
                                <b>{p.label}:</b> {p.text}
                            </li>
                        ))}
                    </ul>

                    {ak.bildeTxt && <p className="img-ie">{ak.bildeTxt}</p>}
                    {ak.bildeURL && <img src={ak.bildeURL} alt={ak.tittel} />}
                </details>
            ))}
            {/* Link til Gemini samtale for utforming av dummy-data som skal etterligne en portfolio: https://gemini.google.com/share/dce9f05ad295 */}
        </section>
    )
}