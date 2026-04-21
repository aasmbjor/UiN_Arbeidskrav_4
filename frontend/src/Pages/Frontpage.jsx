import Arbeidskrav from "../component/Arbeidskrav";
import Gruppemedlemmer from "../component/Gruppemedlemmer";

export default function Frontpage(){
    return(
        <main>
        <Gruppemedlemmer />
        <Arbeidskrav />
      </main>
    )
}