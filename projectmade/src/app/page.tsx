import Nav from "./Components/Nav/BarNav";
import Hom from "./Components/Home/Home";
import Calendario from "./Components/Calendario/Calendario";
import Mappa from "./Components/Mappa/Mappa";
import { fetchAPI } from "./action";
import FiltroMappa from "./Components/Mappa/FiltroMappa";
export default async function Home() {
const data = await fetchAPI();
  return (

    <main>
      <Hom />
      <FiltroMappa data={data}/>
      <Calendario />
    </main>
  );
}
